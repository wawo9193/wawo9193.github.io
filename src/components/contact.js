import React from "react";

import "./css/contact.css"

const Contact = () => {
    return (
        <>
            <div className="contactLinks">
                <h3>Contact</h3>
                <i className="far fa-envelope">: wayne.wood@colorado.edu</i>
                <br/><h3>Project Links</h3>
                <a href="https://www.github.com/wawo9193/slacker-standup"><i className="far fa-compass">: Slacker Stand-up</i></a>
                <a href="https://www.github.com/wawo9193/dunjin"><i className="far fa-compass">: Dunjin Budget Tracker</i></a>
                <br/><h3>Links</h3>
                <a href="https://www.github.com/wawo9193"><i className="fab fa-github">: Github</i></a>
                <a href="https://www.linkedin.com/wayne-wood"><i className="fab fa-linkedin">: Linkedin</i></a>
              </div>
        </>
    )
}

export default Contact
