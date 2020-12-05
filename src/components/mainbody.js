import React, { Component } from "react";

import About from "./about"
import Card from "./card"
import Contact from "./contact"
import Image from "./image"
import Proj from "./proj"
import Skill from "./skill"

import "./css/mainbody.css"

class MainBody extends Component {
    constructor () {
      super()
  
      this.state = {
        about: true,
        projects: false,
        skills: false,
        contact: false,
      }
  
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick = (event) => {
      var component = event.target.value
      if (component==='about') {
        this.setState({about: true, projects: false, skills: false, contact: false})
      } else if (component==='projects') {
        this.setState({about: false, projects: true, skills: false, contact: false})
      } else if (component==='skills') {
        this.setState({about: false, projects: false, skills: true, contact: false})
      } else if (component==='contact') {
        this.setState({about: false, projects: false, skills: false, contact: true})
      }
    }

    render() {
            /* Which component to show, based on card button selected */
        var aboutComponent = this.state.about ? "" : "hideComponent";
        var projComponent = this.state.projects ? "" : "hideComponent";
        var skillComponent = this.state.skills ? "" : "hideComponent";
        var contactComponent = this.state.contact ? "" : "hideComponent";

        return (
            <div className="backgroundMain">
                <div className="backgroundCard">
                    <Image />
                    <h3>Wayne Wood</h3>
                    <small style={{marginBottom: `-3px`}}>Student, University of Colorado Boulder</small>
                    <small style={{marginBottom: `30px`}}>May 2021 (Expected)</small>
                    <Card 
                    handleClick={this.handleClick}
                    />
                </div>
                <div className="backgroundBody">
                    <div className={aboutComponent} >
                        <About />
                    </div>
                    <div className={projComponent} >
                        <Proj />
                    </div>
                    <div className={skillComponent} >
                        <Skill />
                    </div>
                    <div className={contactComponent}>
                        <Contact />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainBody
