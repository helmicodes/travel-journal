import React from "react"
import globe from "../assets/globe.png"

export default function Nav() {
    return(
        <nav>
            <img src={globe} className="nav--icon" />
            <h4 className="nav--title">my travel journal.</h4>
        </nav>
    )
}