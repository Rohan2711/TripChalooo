import Navbar from '../components/Navbar.js';
import Hero from './Hero.js';
import Footer from '../components/Footer.js';
import './HeroStyle.css'
import AboutUs from '../components/AboutUs.js';
function About(){
    return(
<> 
<Navbar></Navbar>

<Hero 
cName="hero-mid"
// heroImg="https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMGhkJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
heroImg="https://plus.unsplash.com/premium_photo-1664304191259-567c510710dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
title="About"
imgHeight="450px"
imgWidth="100%" 

btnClass="hide"

></Hero> 
<AboutUs></AboutUs>
<Footer></Footer>
</>
    );
}
export default About;