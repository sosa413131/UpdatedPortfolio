import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './pages/about'
import Wrapper from './components/wrapper'
import Footer from "./components/footer";
import Portfolio from './pages/portfolio';
import Construction from './pages/construction';
// import Contact from './pages/contact'


class App extends React.Component{
  render() {
return(
      <Router>
        <div>
          <Navbar/>
        <Wrapper>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio}/>
            <Route path="/construction" component={Construction} /> 
          <Route path="/contact" component={Construction} /> 
            {/*<Route component={NoMatch}/> */} 
        </Switch>
        </Wrapper>
        <Footer/>
        </div>
      </Router>
)
    
  }
}


export default App;

