import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './pages/about'
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Wrapper from './components/wrapper'
import Footer from "./components/footer";
import Construction from './pages/construction';
import NoMatch from './pages/notfound';


class App extends Component{
  render() {
return(
      <Router>
        <div className='bodySnatcher'>
        <Wrapper>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact} /> 
            <Route path="/construction" component={Construction} /> 
            <Route  path="/*"component={NoMatch}/> 
        </Switch>
        <Footer/>
        </Wrapper>
        </div>
      </Router>
)
    
  }
}


export default App;

