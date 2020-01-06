import React from 'react';
import './firstcomponent.css';

export default class Example1 extends React.Component {
    render () {
        return (
            <div id="main-body">
                <h1>
                <div class="text-warning">Wood, Wayne</div> <p class="small text-secondary">- University of Colorado, Boulder - May 2021 (expected)</p></h1>
                <p><small class="text-white"> I chose computer science because it gives me an
                        unlimited opportunity to be creative and solve interesting problems
                </small></p>
            </div>
        )
    }
}