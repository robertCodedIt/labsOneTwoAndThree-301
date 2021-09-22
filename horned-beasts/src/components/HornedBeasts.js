import React, { Component } from "react";
let styles = {color:'pink',
float:'right'}
export default class HornedBeasts extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        likes:0,
          
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        this.setState(prevState => {
           return {likes: prevState.likes + 1}
        })
    }
      
    render() {
    
        return (
            <div id = 'beasts'>
                <figure>
                <img onDoubleClick = {this.handleClick} src = {this.props.image_url} alt = {this.props.title}>
                </img>
                <figcaption>
                    {this.props.description}
                   <p style = {styles}> &hearts; {this.state.likes} </p>
                </figcaption>
                </figure>
            </div>
        )
    }
}
