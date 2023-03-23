import Navbar from '../components/Navbar.js';
import Hero from './Hero.js';
import Footer from '../components/Footer.js';
import './HeroStyle.css'
function Service(){
    return(
<> 
<Navbar />


<Hero 
cName="hero"
heroImg="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2t5JTIwNGt8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60   "
title="Service"
imgHeight="400vh"
imgWidth="100%" 
></Hero> 

<br></br>
        <br></br><br></br>
        <br></br>
<h1> Recent Trips</h1>
        <br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br>
<div className='RecentTrip'>
    <div className='component1'>
        <h1>Bagan, Myanmar</h1>
        <img alt='imagec1' src="https://images.unsplash.com/photo-1570605505301-0f713202ca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRlbXBsZXMlMjBoZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"></img>
        <h3>It's hard to truly grasp the magnitude of Bagan Archaeological Zone, dominated by thousands of temples, pagodas, and stupas. Explore the UNESCO World Heritage Site on a bike (or e-bike to cover even more ground). For an eagle's-eye view, take a hot-air balloon ride at sunrise to see the temples scattered across the lush landscape.</h3>
    </div>
    <div className='component2'>
        <h1>Ha Long Bay, Vietnam</h1>
        <img alt='imagec2' src="https://images.unsplash.com/photo-1531737212413-667205e1cda7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fFZpZXRuYW0lMjBoZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"></img>
        <h3>With hundreds of jungle-covered karsts springing out of emerald green waters, Ha Long Bay is a photographer's dream. Hop on a boat or kayak to explore the UNESCO World Heritage Site's beautiful islands and surreal cave systems.</h3>
    </div>
    <div className='component3'>
        <h1>Railay West, Thailand</h1>
        <img alt='imagec3' src="https://plus.unsplash.com/premium_photo-1675448891087-7f3ddde5dfaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBoZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"></img>
        <h3>On the Railay peninsula's west side, Krabi's famous karsts meet a simply stunning jade-green lagoon. The vertical cliffs block access from the Krabi mainland, making Railay reachable only by boat and adding to its incredible appeal.</h3>
    </div>
</div>

<br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br>








<Footer></Footer>

</>
    )
}
export default Service;