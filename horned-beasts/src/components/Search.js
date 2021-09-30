import React from "react";
import Main from './Main'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
  import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'

class Search extends React.Component{
 constructor(props) {
     super(props)
 
     this.state = {
      q:''
     }
     
 }
 
 handleNameChange = (event) => {
    this.setState({ q: event.target.value });
  };
 
 
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">Search Here</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/">Contact Us</Nav.Link>
                                    <Nav.Link href="/">About Us</Nav.Link>
                                   
                                    </Nav>
                                    <Form inline>
                                    <FormControl onChange={this.handleNameChange} type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Main />
                                </Route>
                               
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default Search;