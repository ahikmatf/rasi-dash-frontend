import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from 'react-bulma-components/lib/components/navbar';
import Home from './pages/home'
import SOPChecklist from './pages/sop-checklist'
import SOPDetails from './pages/sop-details'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <Navbar
              color={null}
              fixed="top"
              active={false}
              transparent={true}
            >
              <Navbar.Brand>
                <Navbar.Item renderAs="a" href="#">
                  <img
                    src="https://bulma.io/images/bulma-logo.png"
                    alt="Bulma: a modern CSS framework based on Flexbox"
                    width="112"
                    height="28"
                  />
                </Navbar.Item>
                
              </Navbar.Brand>
              <Navbar.Menu>
                <Navbar.Container>
                  <Navbar.Item>
                    <Link to="/">Home</Link>
                  </Navbar.Item>
                  <Navbar.Item>
                    <Link to="/sop-checklist">SOP Checklist</Link>
                  </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container position="end">
                  <Navbar.Item href="#">BOOM</Navbar.Item>
                </Navbar.Container>
              </Navbar.Menu>
            </Navbar>
          </header>

          <body>
            <Route exact path="/" component={Home} />
            <Route exact path="/sop-checklist" component={SOPChecklist} /> 
            <Route path="/sop-checklist/classes/:id" component={SOPDetails} />           
          </body>

        </Router>
      </div>
    );
  }
}

export default App;
