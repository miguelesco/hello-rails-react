import React from "react"
import { connect } from "react-redux"

import { createStructuredSelector } from "reselect"

const GET_THINGS_REQUEST = "GET_THINGS_REQUEST"

const getGreeting = () => ({type: GET_THINGS_REQUEST})

class Greeting extends React.Component {
  render () {

    let { greeting } = this.props
    const ramdomNumber = Math.floor(Math.random() * 2)
    greeting = greeting[ramdomNumber]

    return (
      <React.Fragment>
        Greeting: {greeting.text}

        <br />
        <button onClick={this.props.getGreeting}>Get Greeting</button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greeting: state => state.greetings
})

const mapDispatchToProps = {  getGreeting }

export default connect(structuredSelector, mapDispatchToProps)(Greeting)
