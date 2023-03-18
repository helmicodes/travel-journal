import React from "react"

export default function Main(props) {
    return(
        <div className="card">
            <img
                src={props.imageUrl}
                className="card--image"
            />
            <div>
                <p>{props.title}</p>
                <p>{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}