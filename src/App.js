import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'
import Services from './Services.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

export default function App() {
  return (
  <>
  <Navbar />
<Switch>
  <Route exact path="/justask/" component={Home} />
  <Route exact path="/justask/about" component={About} />
  <Route exact path="/justask/services" component={Services} />
  <Route exact path="/justask/contact" component={Contact} />
</Switch>  
<Footer />
    </>
    )

}
