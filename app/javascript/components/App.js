import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HelloWorld from "./HelloWorld";
class App extends React.Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HelloWorld greeting="Friend" /> } />
        </Routes>
      </Router>
    );
  }
}

export default App
