import './App.css';
import Search from './components/Search'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import React, { Component } from 'react'








export default class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     q:'',
  }
  
}
handleQueryChange = (term) => {

  this.setState({ q: term });

};



  render() {
    return (
         <div className="App">
      <Search onType = {this.handleQueryChange} />
  <Header/>
  <Main term = {this.state.q} />
  <Footer/>
 </div>
     
    )
  }
}

