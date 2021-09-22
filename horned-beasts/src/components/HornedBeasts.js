import React, { Component } from "react";

export default class HornedBeasts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          
        }
    }
    
    render() {
    
        return (
            <div id = 'beasts'>
                <figure>
                <img src = {this.props.imageUrl} alt = {this.props.title}>
                </img>
                <figcaption>
                    {this.props.description}
                </figcaption>
                </figure>
            </div>
        )
    }
}
