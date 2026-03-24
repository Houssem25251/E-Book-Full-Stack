import './Library.css';
import { BookCard } from '../BookCard/BookCard.jsx';

function SavedBooks({setbooksfav,books,booksfav,bookssaved,setbookssaved}){
    return(
        <div id="Library" className="SavedBooks-Container">
            <p className="SavedBooks-Text">Saved Books</p>
            <div className="Books-Container">
                {bookssaved.map((c)=>{
                    return(
                        <>
                            <BookCard key={c.id} setbooksfav={setbooksfav} booksfav={booksfav} s={c} bookssaved={bookssaved} setbookssaved={setbookssaved}/>
                        </>
                    )
                })}
            </div>    
        </div>    
    )
}

export function Library({setbooksfav,books,booksfav,bookssaved,setbookssaved}){
    return(
        <>
            <p className="Library-Text">My Library</p>
            <SavedBooks booksfav={booksfav} setbooksfav={setbooksfav} books={books} bookssaved={bookssaved} setbookssaved={setbookssaved} />
        </>
    )
}