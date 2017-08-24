import React, {Component} from 'react'

class Title extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-3">{this.props.title}</h1>
              <p className="lead">{this.props.description}</p>
            </div>
          </div>
        )
    }
}

export default Title