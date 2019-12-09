import React, { Component } from 'react';
import axios from 'axios';
import DisplayUsers from './Components/DisplayUsers';

class App extends Component{
constructor() {
  super()
  this.state = {
    user: {},
    users: []
  }
}

componentDidMount(){
    axios.get(`https://api.github.com/users/Iyehvah`)
    .then((result) => {
      console.log(result.data);
      this.setState({...this.state, user: result.data})
    })
    .catch(error => {
      console.log('ERROR' , error)
    })
    axios.get('https://api.github.com/users/Iyehvah/followers')
    .then(result => {
      console.log(result.data);
      this.setState({...this.state, users: result.data})
    })
    .catch(error => {
      console.log('ERROR' , error)
    });
  };


  render() {
    return (
      <>
      <h1>GitHub Usercards!</h1>
      <DisplayUsers users={this.state.users} user={this.state.user} />
      </>
    )
  }
}

export default App;
