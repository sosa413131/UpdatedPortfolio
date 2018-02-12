import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home'
import Wrapper from './components/wrapper'
import Footer from "./components/footer";
// import Contact from './pages/contact'
// import About from './pages/about'

class App extends React.Component{
  render() {
return(
      <Router>
        <div>
          <Navbar/>
        <Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} /> 
            <Route component={NoMatch}/> */}
        </Switch>
        </Wrapper>
        <Footer/>
        </div>
      </Router>
)
    
  }
}


export default App;

