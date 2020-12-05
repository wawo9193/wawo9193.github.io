import React from 'react'
import { socialMedia } from '../portfolio.js'

import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import './css/card.css';

const Card = (props) => (
    <div>
        <div className="listBtn">
            <button value="about" onClick={e => props.handleClick(e)}>About Me</button>
            <button value="projects" onClick={e => props.handleClick(e)}>Recent Projects</button>
            <button value="skills" onClick={e => props.handleClick(e)}>Skills</button>
            <button value="contact" onClick={e => props.handleClick(e)}>Contact/Urls</button>
        </div>
        <a href={socialMedia.github} className="iconBtn github">
            <i className="fab fa-github" />
            <span></span>
        </a>
        <a href={socialMedia.linkedin} className="iconBtn linkedin">
            <i className="fab fa-linkedin" />
            <span></span>
        </a>
    </div>
)

export default Card