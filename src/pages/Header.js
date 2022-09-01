import React/* , { useState } */ from 'react'
import Styling from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrows } from "@fortawesome/free-solid-svg-icons";


function Header(props) {

  return (
    <div>
        <h2 className={Styling.meetTheTeam}> Meet the Team:</h2>
        <FontAwesomeIcon icon={faArrows} className={Styling.faArrow}></FontAwesomeIcon>
        <input type="text" className={Styling.svgGlass} placeholder="SVG FÖRSTORINGSGLAS HÄR"></input>
    </div>
  )
}

export default Header