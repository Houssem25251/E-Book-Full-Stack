import {Header} from '../Header/Header.jsx';
import './CategoryPage.css';
import { useParams } from 'react-router';
import {BookCard} from '../BookCard/BookCard.jsx';

export function CategoryPage({Search,setSearch,CategoriesArray,books,booksfav,setbooksfav,bookssaved,setbookssaved}){
    let {id}=useParams();
    const cat=CategoriesArray.find(k=>k.id===Number(id));
    const CatBooks=books.filter(e=>e.genre===cat.title);

    return(
        <div className="MainCategoryPage">
            <Header Search={Search} setSearch={setSearch}/>
            <div className="CategoryPage">
                <div className="CategoryPage-Books">
                    {CatBooks.map((c)=>{
                        return(
                            <BookCard key={c.id} s={c} booksfav={booksfav} setbooksfav={setbooksfav} bookssaved={bookssaved} setbookssaved={setbookssaved}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}