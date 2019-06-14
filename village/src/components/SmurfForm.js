import React, { Component } from 'react';
import axois from 'axios';
import uuid from 'uuid';
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      succes: '',
      error: '',
    };
  }

  addSmurf = async event => {
    event.preventDefault();
    // add code to create the smurf using the api
      const smurfInfo = {
        id: uuid(),
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      }
      const url = 'http://localhost:3333/smurfs'
      try {
        const addSmurf = await axois.post(url,smurfInfo)
        this.setState({succes: addSmurf.statusText})
        {this.props.smurf(addSmurf.data)}
      } catch (error) {
        this.setState({error: error.message})
      } finally{
        this.setState({
          name: '',
          age: '',
          height: ''
        });
      }
    
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
