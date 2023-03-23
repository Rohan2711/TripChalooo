import Destination from '../components/Destination.js';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import Hero from './Hero.js';
import './HeroStyle.css'
function Home(){
    return(
<> 
<Navbar />
<Hero 
cName="hero"
// heroImg="https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMGhkJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
// https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhaW4lMjBoZCUyMGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60
heroImg="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80 "
title="Life is not meant to be in one place."
text="Choose Your Dream Destination"
imgHeight="620px"
imgWidth="100%" 
url="/"
btnClass="show"
btnText="Travel Plan"
></Hero>
<Destination/>
<Footer></Footer>

</>
    )
}
export default Home;