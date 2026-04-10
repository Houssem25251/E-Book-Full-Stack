import './Library.css';
import { BookCard } from '../BookCard/BookCard.jsx';

function SavedBooks({ books, booksfav, bookssaved, toggleFav, toggleSaved }) {
    return (
        <div id="Library" className="SavedBooks-Container">
            <p className="SavedBooks-Text">Saved Books</p>
            <div className="Books-Container">
                {books.filter(book => bookssaved.includes(book.id)).map(book => (
                    <BookCard key={book.id} s={book} booksfav={booksfav} bookssaved={bookssaved} toggleFav={toggleFav} toggleSaved={toggleSaved} />
                ))}
            </div>
        </div>
    );
}

export function Library({ books, booksfav, bookssaved, toggleFav, toggleSaved }) {
    return (
        <>
            <p className="Library-Text">My Library</p>
            <SavedBooks books={books} booksfav={booksfav} bookssaved={bookssaved} toggleFav={toggleFav} toggleSaved={toggleSaved} />
        </>
    );
}