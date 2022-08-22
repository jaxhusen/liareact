import React from "react";
import Styling from './Api.module.css'

function Api(props) { /* hämtar props från Api filen */
    console.log(props)

    return (
        <div>
                <article className={Styling.cardStyle}>
                <p className={Styling.nameApi}>{props.api.name.first} {props.api.name.last}</p>
                <img className={Styling.imgApi} src={props.api.picture.medium} alt={props.api.name.last}></img>
                <p className={Styling.cityApi}>{props.api.location.city}</p>
                
                </article>
        </div>
    )
}
export default Api