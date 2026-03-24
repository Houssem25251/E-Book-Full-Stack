import './Home.css';
import { Link } from 'react-scroll';
import { useState } from 'react';

export function Home(){
    const [state,setState] = useState(0);
    return(
        <div id="Home" className="HomeDiv">
            <div className="Main">
                <div
                    className="Slider"
                    style={{ transform: `translateX(-${state * 100}%)` }}
                >
                    <div className="Main2">
                        <p className="Welcome">Welcome to Houssem's Library</p>
                        <p className="Welcome-D">
                            Browse hundreds of books, discover<br/> new genres, and enjoy a clean reading experience.
                        </p>
                    </div>

                    <div className="Main2">
                        <p className="Welcome">The perfect guide to Reading <br/> Books</p>
                        <p className="Welcome-G">
                            Explore our curated catalog of hidden gems and discover books that inspire, entertain, and spark your imagination.
                            <Link
                              to="about"
                              smooth={true}
                              duration={500}
                              className="ReadMore"
                            >
                              Read more
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <div className="Div-B">
                <button onClick={() => setState(0)} className="B"></button>
                <button onClick={() => setState(1)} className="B"></button>
            </div>
        </div>
    );
}
