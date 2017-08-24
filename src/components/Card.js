import React, { Component } from 'react'

let styles = {
    width: "20rem"
}
class Card extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <div className="card" style={styles}>
                <div className="card-block">
                    <h4 className="card-title">{this.props.vehicle.name}</h4>
                    <p className="card-text"><b>Model:</b>{this.props.vehicle.model}</p>
                    <p className="card-text"><b>Manufacturer:</b>{this.props.vehicle.manufacturer}</p>
                    <p className="card-text"><b>Pilot:</b>{this.props.vehicle.pilots}</p>
                    <p className="card-text"><b>Cost in credits:</b>{this.props.vehicle.cost_in_credits}</p>
                    <p className="card-text"><b>Length:</b>{this.props.vehicle.length}</p>
                    <p className="card-text"><b>Max Atmosphering Speed:</b>{this.props.vehicle.max_atmosphering_speed}</p>
                    <p className="card-text"><b>Crew:</b>{this.props.vehicle.crew}</p>
                    <p className="card-text"><b>Passengers:</b>{this.props.vehicle.passengers}</p>
                    <p className="card-text"><b>Cargo Capacity:</b>{this.props.vehicle.cargo_capacity}</p>
                    <p className="card-text"><b>Consumables:</b>{this.props.vehicle.consumables}</p>
                    <p className="card-text"><b>Vehicle Class:</b>{this.props.vehicle.vehicle_class}</p>
                    <p className="card-text"><b>Model:</b>{this.props.vehicle.model}</p>
                    <a href={this.props.vehicle.url} className="btn btn-primary">See on SWAPI</a>
                </div>
            </div>
        )
    }
}

export default Card