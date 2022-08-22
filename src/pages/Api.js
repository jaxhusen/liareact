import React from "react";

function Api(props) { //hämtar props från Api filen
    console.log(props.api)
    return (
        <div>
            <li>
                {props.api.first}{props.api.last} <br />
                <img src={props.api.thumbnail} alt={props.api.first} ></img><br />
                {props.api.city}<br />
                {/* HÄR KOMMER IKONER FÖR MEJL SAMT TELEFON */}
            </li>
        </div>
    )
}
export default Api
