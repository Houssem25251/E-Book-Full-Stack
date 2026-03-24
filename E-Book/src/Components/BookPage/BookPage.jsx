import './BookPage.css';
import FILLEDSTAR from '../../assets/FILLEDSTAR.png';
import UNFILLEDSTAR from '../../assets/UNFILLEDSTAR.png'
import HALFFILLEDSTAR from '../../assets/HALFFILLEDSTAR.png';
import {Header} from '../Header/Header.jsx';
import {useParams} from 'react-router';

function reviews(rev){
    const reviews=[];
    if(Number.isInteger(rev)===true){
        for(let i=0;i<rev;i++){
            reviews.push(<img className="STAR" src={FILLEDSTAR}/>)
        }
        for(let i=rev;i<5;i++){
            reviews.push(<img className="STAR" src={UNFILLEDSTAR}/>)
        }
    }
    else{
        const r=Math.floor(rev);
        for(let i=0;i<r;i++){
            reviews.push(<img className="STAR" src={FILLEDSTAR}/>)
        }
        reviews.push(<img className="STAR" src={HALFFILLEDSTAR}/>)
        for(let i=r;i<4;i++){
            reviews.push(<img className="STAR" src={UNFILLEDSTAR}/>)
        }
        
    }
    return (reviews);
}

export function BookPage({Search,setSearch,books,booksfav,setbooksfav}){
    let {id}=useParams();
    const s=books.find(e=>e.id===parseInt(id));
    function addfav(){
        if(!booksfav.some((book)=>{return(book.id===s.id)})){
            setbooksfav([...booksfav,s]);
            alert("Book is now added to favortie section!");
        }
        else{
            alert("Book already exists in favorite section!");
        }
    }
    function removefav(){
        if(booksfav.some((book)=>{return(book.id===s.id)})){
            setbooksfav(booksfav.filter((book)=>{book.id!==s.id}));
            alert("Book has been removed from favorite section!");
        }
    }
    return(
    <div className="MainBookPage">
        <Header Search={Search} setSearch={setSearch}/>
        <div className="BookPage">
            <p className="book-title">{s.title}</p>
            <div className="BookPage-Content">
                <img className="BookPage-Image" src={`http://localhost:3000${s.image}`}/>
                    <div className="sub-book-content">
                        <p className="book-author">By {s.author}</p>
                        <div className="ReviewsContainer">
                            {reviews(s.reviews)}
                        </div>
                        <p className="book-description">{s.description}</p>
                        <div className="parent-download">
                            <a className="download" href={`http://localhost:3000${s.download}`} download>Download PDF</a>
                            {!booksfav.some(e=>e.id===s.id) && <a onClick={()=>{addfav();}} className="download">Add to favorites</a>}
                            {booksfav.some(e=>e.id===s.id) && <a onClick={()=>{removefav();}} className="download">Remove from favorites</a>}
                            
                        </div>
                    </div>    
            </div>
        </div> 
    </div>
    )
}


