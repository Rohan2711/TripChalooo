import Navbar from '../components/Navbar.js';
import Hero from './Hero.js';
import Footer from '../components/Footer.js';
import './HeroStyle.css'
import ContactForm from '../components/ContactForm.js';
function Contact(){
    return(
<> 
<Navbar />

<Hero 
cName="hero"
heroImg="https://images.unsplash.com/photo-1603382585507-45205571d760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 "
title="Contact"
// text="Choose Your Dream Destination"
imgHeight="400vh"
imgWidth="100%" 
url="/"
// btnClass="show"
// btnText="Travel Plan"
></Hero>
<ContactForm></ContactForm>
<Footer></Footer>

</>
    );
}
export default Contact;