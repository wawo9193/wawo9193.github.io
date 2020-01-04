import React from 'react';
import './nav-comp.css';

export default class Navbar1 extends React.Component {
    render() {
        return (
            <div>
                <ul id="nav">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="https://www.github.com/wawo9193">Github</a></li>
                    <li><a href="https://fittrack.herokuapp.com">Fittrack</a></li>
                    <li><a href="./form.html">Form Example</a></li>
                    <li><a href="./tic-tac-toe/tic-tac-toe.html">Tic-Tac-Toe</a></li>
                </ul>
            </div>
        )
    }
}