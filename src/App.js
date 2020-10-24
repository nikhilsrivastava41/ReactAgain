import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from './Navbar';
import Card from './Cards';
import Footer from './Footer';
class App extends Component{
  state={
    c:0,
  }
  increase=()=>{
      this.setState({c:this.state.c+1});
  }
  decrease=()=>{
    if(this.state.c >= 1)
      this.setState({c:this.state.c-1});
    else
      <p>Not below zero</p>
  }
  render(){
    return <div>
      <Navbar/>
      <div className="bor">
        <h3>COUNTER: {this.state.c}</h3>
        <button onClick={this.increase}>Increase Count 😃</button>
        <button onClick={this.decrease} >Decrease Count 😢</button>
      </div>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Footer name="Nikhil" lname="Srivastava" year="2020"/>
    </div>
  }
}

export default App;
