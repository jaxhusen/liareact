import React from "react";
import Styling from './Api.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


function Api(props) { /* hämtar props från Api filen */


    return (
            <div id={Styling.cardsContainer} className={props.SwitchToggled ? Styling.gridViewChild : Styling.listViewChild}>
                <div className={Styling.cardStyle}>
                    <p className={Styling.nameApi}>{props.api.name.first} {props.api.name.last}</p>
                    <img className={Styling.imgApi} src={props.api.picture.large} alt={props.api.name.last}></img>
                    <p className={Styling.cityApi}>{props.api.location.city}</p>
                    <FontAwesomeIcon icon={faEnvelope} className={Styling.faEnvelope}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faPhone} className={Styling.faPhone}></FontAwesomeIcon>
                </div>
            </div>
    )
}
export default Api