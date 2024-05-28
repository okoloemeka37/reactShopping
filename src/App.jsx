import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './views/Home';
import Contact from './views/Contact';
import About from './views/About';
import Cart from './views/Cart';
import "./styles/App.css"
import "./styles/Mine.css"
export default function App() {
  return (
    <>
<Router>
  <Switch>
    <Route exact path="/" >
      <Home/>
    </Route>

    <Route path="/about" >
      <About/>
    </Route>

    <Route path="/contact" >
      <Contact/>
    </Route>

    <Route path="/cart" >
      <Cart/>
    </Route>

  </Switch>
</Router>
    </>
  )
}

