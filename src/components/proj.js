import React from 'react'

import './proj.css'

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
            <tr className="rowBtn" type="submit" onClick={() => rowClick("https://www.github.com/wawo9193/dunjin")}>
                <td>dunjin</td>
                <td>NodeJS, React, MySQL, HTML/CSS</td>
                <td>Personal budget dashboard using Plaid API endpoints to retrieve connection/information. Learned about Authentication/Authorization, interacting with API endpoints, and how state and props work in the React framework.</td>
                <td>May 2020-Present</td>
            </tr>
            <tr className="rowBtn" type="submit" onClick={() => rowClick("https://github.com/jphouminh71/csci3308_fall19")}>
                <td>Fittrack</td>
                <td>NodeJS, MongoDB, HTML/CSS</td>
                <td>Fitness tracker dashboard with a profile page to help personalize the experience. Learned how to handle requests on the backend and how to interact with a database.</td>
                <td>Sept. 2019-Dec. 2019</td>
            </tr>
            <tr className="rowBtn" type="submit" onClick={() => rowClick("https://www.github.com/wawo9193/ufly")}>
                <td>Ufly</td>
                <td>C++, Qt</td>
                <td>Student version of Uber for private jets with rudimentary frontend to showcase knowledge of graphs. Learned more modern C++ techniques and also found a neat way to calculate distance accurately with the Haversine formula.</td>
                <td>Feb. 2019-April 2019</td>
            </tr>
        </table> 
    </>
)

export default Proj