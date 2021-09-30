import React, { Component } from "react";
import { Modal,Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
let modalImgStyle = {
    width:'300px',
    height:'400px'
}

export default class HornedBeasts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
      isOpen : false,
    };
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick = () => {
    this.setState((prevState) => {
      return { likes: prevState.likes + 1 ,
    isOpen:true};
    });


    
  };

  closeModal = () => this.setState({ isOpen: false });


  render() {
    return (
      <div id="beasts">
    <Card style={{ width: "25rem" }}>
          <Card.Img
            variant="top"
            onDoubleClick={this.handleClick}
            src={this.props.image_url}
          />
          <Card.Body>
            <Card.Title> {this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
              &hearts; {this.state.likes}
            </Card.Text>
          </Card.Body>
        </Card>
       
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
  <Modal.Header closeButton>
    <Modal.Title>{this.props.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body> <img onClick ={this.closeModal} style = {modalImgStyle} src = {this.props.image_url} alt = {this.props.id}/>
  &hearts;{this.state.likes}
  </Modal.Body>
  <Modal.Footer>
      {this.props.description}
    <Button variant="secondary" onClick = {this.closeModal}>Close</Button>
  </Modal.Footer>
</Modal>
 

      </div>
    );
  }
}
