import React from 'react';
import { btn } from 'react-bootstrap';
import './profile-card.css';
import pic from './mepic.png' // relative path to image 

export default class Profile extends React.Component {
    render () {
        return (
            <div id="main-body">
                <img src={ pic } id="profile-pic" alt={"profile photo"}/>
                <h6 class="text-warning">
                    Contact:
                </h6>
                <p class="text-secondary">wayne.wood@colorado.edu</p>
                <button class="btn btn-outline-warning text-warning bg-dark" data-toggle="modal" data-target="#myModal">Info / Resume</button>
            </div>
        )
    } 
}