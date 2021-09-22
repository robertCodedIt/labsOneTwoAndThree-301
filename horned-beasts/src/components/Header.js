import React, { Component } from 'react'


let headStyles = {
color:'blue',
textAlign:'center',
}
export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    } 
    
    render() {
        return (
          <>
          <h1 style = {headStyles}>
              HORNED BEASTS OF THE WORLD!
          </h1>
           </>
        )
    }
}
