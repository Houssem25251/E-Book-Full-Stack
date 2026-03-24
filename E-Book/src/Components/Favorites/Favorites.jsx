import { BookCard } from '../BookCard/BookCard.jsx';
import './Favorites.css';

export function Favorites({setbooksfav,booksfav,setbookssaved,bookssaved}){
    return(
        <div id="Favorites" className="Favorites-Container">
                    <p className="Favorites-Text">Favorites</p>
                    <div className="FavoritesBook-Container">
                        {booksfav.map((c)=>{
                            return(
                                <>
                                    <BookCard key={c.id} setbooksfav={setbooksfav} booksfav={booksfav} s={c} setbookssaved={setbookssaved} bookssaved={bookssaved}/>
                                </>    
                            )
                        })}
                    </div>    
        </div>
    )    
}