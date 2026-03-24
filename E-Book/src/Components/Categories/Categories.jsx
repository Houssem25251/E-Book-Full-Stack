import './Categories.css';
import {Link} from 'react-router';
import {useState} from 'react';

export class CategoryPart{
    title;
    image;
    id;
    constructor(a,b,c){
        this.title=a;
        this.image=b;
        this.id=c;
    }
}

function Category({i,t,id}){
    return(
        <Link to={`/category/${id}`}>
            <div className="CategoryDiv">
                <img className="CatPicture" src={i}/>
                    <p className="CatText">{t}</p>
            </div>
        </Link>    
    )
}

export function Categories({CategoriesArray}){
    const HiddenIds=[9,10,11,12,13,14,15];
    const[state,setState]=useState(false);
    function changeState(){
        setState(!state);
    }
    return(
        <div id="Categories" className="CategoriesContainer">
            <p className="CatTitle">Browse categories</p>
                <div className={`MainCat ${state?"show":""}`}>
                    {CategoriesArray.map((cat)=>{
                        if(HiddenIds.includes(cat.id)===true){
                            return(
                                <div className={`cat ${state? "show":""}`}>
                                    {state && <Category i={cat.image} t={cat.title} id={cat.id} key={cat.id}/>}
                                </div>
                            )
                        }
                        else{
                            return(
                                <div className="cat1">
                                    <Category i={cat.image} t={cat.title} id={cat.id} key={cat.id}/>
                                </div>
                            )
                        }
                    })}
                </div>
            {!state && <button onClick={changeState} className="ButtonCat">Browse More</button>}
            {state && <button onClick={changeState} className="ButtonCat1">Collapse</button>}      
        </div>    
    )
}