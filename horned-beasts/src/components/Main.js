import HornedBeasts from "./HornedBeasts";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
 import Row from 'react-bootstrap/Row';
import { data } from "./data";


import React, { Component } from 'react'

export default class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
         <Container>
  <Row> 
    <Col md = {3}>{data.filter((fBeasts) => fBeasts.title.toUpperCase().includes(this.props.term.toUpperCase())).map((fBeasts) => {
        return (
          <HornedBeasts
            image_url={fBeasts.image_url}
            title={fBeasts.title}
            description={fBeasts.description}
            id ={fBeasts.keyword} 
            query = {fBeasts.horns}
          />
        );
      })}</Col>
  </Row>
 
</Container>
      </div>
    )
  }
}

