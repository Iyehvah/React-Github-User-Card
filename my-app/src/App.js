import React, { Component } from 'react';
import axios from 'axios';
import DisplayFollowers from './Components/DisplayFollowers';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

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
      <Container>
      <h1>GitHub Usercards!</h1>
      <DisplayFollowers users={this.state.users} user={this.state.user} />
      </Container>
    )
  }
}

export default App;
