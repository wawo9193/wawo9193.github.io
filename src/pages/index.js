import React, { Component } from "react"
import emoji from "react-easy-emoji";
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Proj from "../components/proj"
import Card from "../components/card"

import "./index.css"

class IndexPage extends Component {

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

  render () {

    var aboutComponent = this.state.about ? "" : "hideComponent";
    var projComponent = this.state.projects ? "" : "hideComponent";
    var skillComponent = this.state.skills ? "" : "hideComponent";
    var contactComponent = this.state.contact ? "" : "hideComponent";

    return (
      <Layout>
        <SEO title="Home" />
        <h1>{emoji("Hello 👋🏼")}</h1>
        <p>Welcome to my portfolio page.</p>
        <div className="backgroundMain">
          <div className="backgroundCard">
            <Image />
            <h3>Wayne Wood</h3><small style={{marginBottom: `-3px`}}>Student, University of Colorado Boulder</small><small style={{marginBottom: `30px`}}>May 2021 (Expected)</small>
            <Card 
              handleClick={this.handleClick}
            />
          </div>
          <div className="backgroundBody">
            <div className={aboutComponent} >
              <h3>About Me</h3>
              <p>Hi, my name is Wayne and I am a rising senior at CU Boulder. I have interned as a
                Software Engineer at Panasonic and worked as a Data Structures Course Assistant at CU Boulder's Computer
                Science Department. I am currently trying to expand my knowledge on object oriented programming,
                and full-stack development. I enjoy optimizing code runtime, coding
                in general and in my spare time I enjoy movies, food, star-gazing, basketball, frisbee, cycling, and hiking.
              </p><br/>
              <p>I am most adept at C++, Python, and the React/Node Javascript frameworks. I have recently taken a Udemy 
                course in Golang basics and am currently in a course where I will learn Java more in-depth.
              </p><br/>
              <p>I am looking for a new grad opportunity for the Summer of 2021, so please reach out if you would
                like a resume and/or are hiring!
              </p>
            </div>
            <div className={projComponent} >
              <h3>Recent Projects</h3>
              <Proj />
            </div>
            <div className={skillComponent} >
              <h3>Skills</h3>
              <h5>Languages:</h5>
              <ul>
                <li>C++</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>Go</li>
                <li>Scala</li>
                <li>Java (In Progress)</li>
              </ul>
              <h5>Frameworks:</h5>
              <ul>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
              </ul>
            </div>
            <div className={contactComponent}>
              <div className="contactLinks">
                <h3>Contact</h3>
                <i className="far fa-envelope">: wayne.wood@colorado.edu</i>
                <br/><h3>Project Links</h3>
                <a href="https://www.github.com/wawo9193"><i className="far fa-compass">: https://fittrack.herokuapp.com</i></a>
                <a href="https://www.github.com/wawo9193"><i className="far fa-compass">: https://dunjin-app.herokuapp.com (in progress)</i></a>
                <br/><h3>Links</h3>
                <a href="https://www.github.com/wawo9193"><i className="fab fa-github">: https://www.github.com/wawo9193</i></a>
                <a href="https://www.github.com/wawo9193"><i className="fab fa-linkedin">: https://www.linkedin.com/wayne-wood</i></a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
