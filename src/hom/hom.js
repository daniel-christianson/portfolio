import React from 'react';
import '../App.css';
import './hom.css';
import linkedinIcon from './linkedin.png';
import githubIcon from './github.png';

function Home() {
    return(
        <div className="Content-Div">
            <div className="Home-Header">
                <h1>Daniel Christianson</h1>
                <h2>Resume and Portfolio</h2>
                <ul className="Home-List">
                    <li className="Home-List-Item">
                        <img src={linkedinIcon} className="Home-Icons" />
                        <a className="Home-Link" href="https://www.linkedin.com/in/daniel-s-christianson">linkedin</a>
                    </li>
                    <li className="Home-List-Item">
                        <img src={githubIcon} className="Home-Icons" />
                        <a className="Home-Link" href="https://github.com/daniel-christianson">github</a>
                    </li>
                </ul>
                <br /><br />
            </div>
        </div>
    );
}

export default Home;
