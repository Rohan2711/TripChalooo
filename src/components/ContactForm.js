import './ContactFormStyle.css';
const ContactForm=()=>{
    return(
//         <div>
//             <h1>
// Contact
//             </h1>
//             <input placeholder='Name' type="text"> Name</input>
//         </div>
<div class="container">  
  <form id="contact" action="" method="post">
    {/* <h3>Colorlib Contact Form</h3> */}
    <h1>Your Can Enter Your Query Here!!!</h1>
    {/* <fieldset> */}
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
      <br></br>
    {/* </fieldset> */}
    {/* <fieldset> */}
      <input placeholder="Your Email Address" type="email" tabindex="2" required/> <br></br>
    {/* </fieldset> */}
    {/* <fieldset> */}
      <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/> <br></br>
    {/* </fieldset> */}
    {/* <fieldset>/ */}
      <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required/> <br></br>
    {/* </fieldset>/ */}
    
    {/* <fieldset> */}
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea> <br></br>
    {/* </fieldset> */}
    {/* <fieldset> */}
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button> <br></br>
    {/* </fieldset> */}

  </form>
</div>
        
    )
}
export default ContactForm;