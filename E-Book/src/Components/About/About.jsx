import './About.css';

export function About(){
    return(
        <div id="About" className="About-Container">
            <p className="About-Text">About</p>
            <p className="About-Text-Sub">
                I’m a software engineering student with a strong interest in frontend development and building interactive web applications.
                This website is a personal project built with React as part of my learning journey. It was developed with a strong focus on writing clean code, structuring components properly, and refining the user experience through continuous improvement.
                <br/>It is in the process of becoming a full web application once i master backend.
            </p>
            <p className="About-Text-Sub">Contacts:
                <br/>Email: houssemeddinezaier@gmail.com
                <br/>Github: <a className="githublinkedin-link" href="https://github.com/Houssem25251">https://github.com/Houssem25251</a>
                <br/>Linkedin: <a className="githublinkedin-link" href="https://www.linkedin.com/in/houssem-zaier-7a175b337/">https://www.linkedin.com/in/houssem-zaier-7a175b337/</a>
                <br/>Main portfolio website: <a className="githublinkedin-link" href="https://houssemeddinezaier.netlify.app">https://houssemeddinezaier.netlify.app</a>
                <br/>
                <p className="IMPORTANT"><br/>IMPORTANT:</p>
                <p className="PUBLICDOMAIN">EVERY BOOK USED IN THIS WEBSITE IS PUBLIC DOMAIN DOWNLOADED <br/>FROM <a target="_blank" className="gutenberg" href="https://www.gutenberg.org">PROJECT GUTENBERG</a></p>
                <p className="PUBLICDOMAIN">EVERY IMAGE USED IN THIS WEBSITE IS AI-GENERATED.</p>
            </p>
            
        </div>
    )
}