import './DestinationStyle.css'
import DestinationData from './DestinationData';

const Destination=()=>{
    return(
        <div className="destination">
         
            <h1>Popular Destination</h1>
            
            <p>Welcome to our tour website, where we invite you to embark on a journey of discovery and adventure. Our expertly crafted tours are designed to take you off the beaten path and into the heart of your destination, allowing you to fully immerse yourself in the local culture, history, and people.</p>
       <DestinationData
       cname="first-des"
       heading="Los Angeles, California"
       text="Los Angeles is a world-renowned destination that offers a unique blend of natural beauty, cultural richness, and modern entertainment. With its iconic landmarks, beautiful beaches, and sunny weather, Los Angeles is a city that will captivate and enchant visitors from all over the world."
       img1="https://images.unsplash.com/photo-1597982087634-9884f03198ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxvcyUyMGFuZ2VsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
       img2="https://images.unsplash.com/photo-1619083382085-9452906b7157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbGlmb3JuaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
       />


<DestinationData
cname="first-des-reverse"
       heading="London, England"
       text="London is a city that offers something for everyone, from history and culture to food and entertainment. The city is home to iconic landmarks such as Buckingham Palace, the Tower of London, and Big Ben, which provide a glimpse into its rich history. The British Museum and National Gallery are must-see destinations for art enthusiasts, while foodies will relish the city's diverse culinary scene. "
       img1="https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXVyb3BlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
       img2="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
       />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1> Recent Trips</h1>
        <br></br>
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


        </div>



    )
}
export default Destination;