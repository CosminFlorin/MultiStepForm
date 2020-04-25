import React, { Component } from 'react'
import UserForm from './Components/UserForm'
import { findByLabelText } from '@testing-library/react'
export default class App extends Component {
  render() {
    return (
      <div className="App" style={{textAlign:"center"}}>
        <UserForm/>
      </div>
    )
  }
}
