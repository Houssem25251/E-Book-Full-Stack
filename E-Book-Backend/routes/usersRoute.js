import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../db.js';
import { users, favorites, saved } from '../schema.js';
import { eq, and } from 'drizzle-orm';
import { authMiddleware } from '../middleware/authentificate.js';

export const usersRouter = express.Router();

usersRouter.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ message: 'Username and password required' });
        const existing = await db.select().from(users).where(eq(users.username, username));
        if (existing.length) return res.status(409).json({ message: 'Username already taken' });
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await db.insert(users).values({ username, password: hashedPassword }).returning();
        const token = jwt.sign({ id: newUser[0].id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ token, username: newUser[0].username });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Registration failed' });
    }
});

usersRouter.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await db.select().from(users).where(eq(users.username, username));
        if (!user.length) return res.status(401).json({ message: 'Invalid credentials' });
        const valid = await bcrypt.compare(password, user[0].password);
        if (!valid) return res.status(401).json({ message: 'Invalid credentials' });
        const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ token, username: user[0].username });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Login failed' });
    }
});

usersRouter.get('/favorites', authMiddleware, async (req, res) => {
    try {
        const favs = await db.select().from(favorites).where(eq(favorites.user_id, req.userId));
        res.json(favs.map(f => f.book_id));
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch favorites' });
    }
});

usersRouter.get('/saved', authMiddleware, async (req, res) => {
    try {
        const savedBooks = await db.select().from(saved).where(eq(saved.user_id, req.userId));
        res.json(savedBooks.map(s => s.book_id));
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch saved books' });
    }
});

usersRouter.post('/favorites/:bookId', authMiddleware, async (req, res) => {
    try {
        const bookId = parseInt(req.params.bookId);
        const existing = await db.select().from(favorites)
            .where(and(eq(favorites.user_id, req.userId), eq(favorites.book_id, bookId)));
        if (existing.length) {
            await db.delete(favorites).where(and(eq(favorites.user_id, req.userId), eq(favorites.book_id, bookId)));
            res.json({ action: 'removed' });
        } else {
            await db.insert(favorites).values({ user_id: req.userId, book_id: bookId });
            res.json({ action: 'added' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to toggle favorite' });
    }
});

usersRouter.post('/saved/:bookId', authMiddleware, async (req, res) => {
    try {
        const bookId = parseInt(req.params.bookId);
        const existing = await db.select().from(saved)
            .where(and(eq(saved.user_id, req.userId), eq(saved.book_id, bookId)));
        if (existing.length) {
            await db.delete(saved).where(and(eq(saved.user_id, req.userId), eq(saved.book_id, bookId)));
            res.json({ action: 'removed' });
        } else {
            await db.insert(saved).values({ user_id: req.userId, book_id: bookId });
            res.json({ action: 'added' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to toggle saved' });
    }
});