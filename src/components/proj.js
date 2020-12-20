import React from 'react'

import './css/proj.css'

function rowClick (url) {
    window.open(url);
}

const Proj = () => (
    <>
        <table>
            <tr>
                <th>Project name</th>
                <th>Stack used</th>
                <th>Description</th>
                <th>Date</th>
            </tr>

            <tr className="rowBtn" onClick={() => rowClick("https://github.com/wawo9193/slacker-standup")}>
                <td>Slacker Stand-up</td>
                <td>Java, Bolt SDK, Redis</td>
                <td>An automated virtual scrum stand-up app through the Slack API. It presents users with options to schedule their
                    stand-ups, select who will be notified, and shares everyone's stand-up in a designated channel. In it, I implemented
                    OOP design features, OAuth2 workflow, and created UML and architecture diagrams.</td>
                <td>Oct. 2020-Dec. 2020</td>
            </tr>
            <tr className="rowBtn" onClick={() => rowClick("https://www.github.com/ur-turn/accreditor")}>
                <td>UR Turn</td>
                <td>Ruby, Ruby on Rails, Postgres, HTML/CSS</td>
                <td>A K-12 education dashboard to assist school counselors, guardians, and students. This was a project
                    that I made contributions to, such as an email notification when attendance dropped below a certain
                    threshold. We worked in an AGILE-like manner and it allowed me to contribute code that was
                    reviewed by a senior engineer.</td>
                <td>Aug. 2020-May 2021</td>
            </tr>
            <tr className="rowBtn" onClick={() => rowClick("https://www.github.com/wawo9193/dunjin")}>
                <td>dunjin</td>
                <td>NodeJS, ReactJS, MySQL, HTML/CSS</td>
                <td>A budget tracker side-project, where I implemented authentication/authorization, object states, and used
                    environment variables.</td>
                <td>May 2020-Present</td>
            </tr>
        </table> 
    </>
)

export default Proj