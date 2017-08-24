import React, { Component } from 'react'

let prop = {
        name: "TIE bomber", 
        model: "TIE/sa bomber", 
        manufacturer: "Sienar Fleet Systems", 
        cost_in_credits: "unknown", 
        length: "7.8", 
        max_atmosphering_speed: "850", 
        crew: "1", 
        passengers: "0", 
        cargo_capacity: "none", 
        consumables: "2 days", 
        vehicle_class: "space/planetary bomber", 
        pilots: [], 
        films: [
            "https://swapi.co/api/films/2/", 
            "https://swapi.co/api/films/3/"
        ], 
        created: "2014-12-15T12:33:15.838000Z", 
        edited: "2014-12-22T18:21:15.667730Z", 
        url: "https://swapi.co/api/vehicles/16/"
}

class Card extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">{prop.name}</h4>
                    <p className="card-text"><b>Model:</b>{prop.model}</p>
                    <p className="card-text"><b>Manufacturer:</b>{prop.manufacturer}</p>
                    <p className="card-text"><b>Cost in credits:</b>{prop.cost_in_credits}</p>
                    <p className="card-text"><b>Length:</b>{prop.length}</p>
                    <p className="card-text"><b>Max Atmosphering Speed:</b>{prop.max_atmosphering_speed}</p>
                    <p className="card-text"><b>Crew:</b>{prop.crew}</p>
                    <p className="card-text"><b>Passengers:</b>{prop.passengers}</p>
                    <p className="card-text"><b>Cargo Capacity:</b>{prop.cargo_capacity}</p>
                    <p className="card-text"><b>Consumables:</b>{prop.consumables}</p>
                    <p className="card-text"><b>Vehicle Class:</b>{prop.vehicle_class}</p>
                    <p className="card-text"><b>Model:</b>{prop.model}</p>
                    <a href={prop.url} className="btn btn-primary">See on SWAPI</a>
                </div>
            </div>
        )
    }
}

export default Card