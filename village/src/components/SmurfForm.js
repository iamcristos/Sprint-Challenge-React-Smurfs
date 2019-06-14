import React, { Component } from 'react';
import axois from 'axios';
import Form from './styles/form'
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

  
 async componentDidMount () {
    const {id} = this.props.match.params
    const smurfs= await this.props.smurfs
    if (id && smurfs.length) {
      try {
        const smurf = await smurfs.find(smurf=>smurf.id == id)
        const {name,age,height} = smurf;
        this.setState({name,age,height})
      } catch (error) {
        console.log(error)
        this.setState({error: error.message})
      }
    }
  }

  addSmurf = async event => {
    event.preventDefault();
    // add code to create the smurf using the api
      const smurfInfo = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      }
      const {id} = this.props.match.params
      let axiosCall
      const url = 'http://localhost:3333/smurfs'
      if (id) {
        axiosCall = await axois.put(`http://localhost:3333/smurfs/${id}`,smurfInfo)
      } else {
        axiosCall= await axois.post(url,smurfInfo)
      }
      try {
        const addSmurf = axiosCall
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
        this.props.history.push('/')
      }
    
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    
    return (
      <div style={{display:'flex',
      flexDirection:'column', alignItems:'center'}}>
        <div>{this.state.error}</div>
        <Form onSubmit={this.addSmurf}>
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
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
