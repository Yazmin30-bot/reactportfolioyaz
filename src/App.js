import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
/*import Contact from './pages/Contact';
import About from "./pages/About"; */
import './App.css';

function App() {
  return (
    
     <Router>
        <Route exact path="/reactportfolioyaz/" component={Home} />
        <Route exact path="/reactportfolioyaz/portfolio" component={Portfolio} />
        {/* <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} /> */}
    </Router> 
  );
}

export default App;
