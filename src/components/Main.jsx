import React from "react"
import Card from "./Card"
import data from "../data"

export default function Main() {
    const cards = data.map((item) => {
        return <Card
            title={item.title}
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            imageUrl={item.imageUrl}
        />
    })

    return(
        <div className="main">
            {cards}
        </div>
    )
}