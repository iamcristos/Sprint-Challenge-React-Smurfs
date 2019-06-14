
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axois from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavItem from './components/Navigation/navbar'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: '',
      loading: false,
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const fetchSmurfs = await axois.get('http://localhost:3333/smurfs');
      this.setState({ smurfs: fetchSmurfs.data });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  errorMsg = (error)=>{
    this.setState({error: error})
  }

  smurfs = (data)=>{
    this.setState({smurfs: data})
  }
  render() {
    return (
      <div className="App">
        <Router>
          <NavItem />
          <span>{this.state.error}</span>
          <Route exact path='/'
          render={(props)=> <Smurfs smurfs={this.state.smurfs}
           {...props} error={this.errorMsg} smurf={this.smurfs}/>} />
          <Route exact path='/add_smurf' 
          render={(props)=> <SmurfForm {...props} 
          smurf={this.smurfs}/>} />
          <Route exact path='/smurfs/:id' 
          render = {(props)=>  <SmurfForm smurfs={this.state.smurfs}
          {...props} smurf={this.smurfs}/>}  />
        </Router>
      </div>
    );
  }
}

export default App;
