import './FooterStyle.css'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='top'>
                <div className='logo'>
                    <h1>TripChalooo</h1>
                    <h3>Choose your Dream Destination</h3>
                </div>
                <div className='mediaicons'>
                    <a href='https://twitter.com/login?lang=en'>
                        <i class="fa-brands fa-facebook "></i></a>
                    <a href='https://www.youtube.com/watch?v=0dOSLhPzSGI&t=173s'><i class="fa-brands fa-youtube "></i></a>
                    <a href='https://www.linkedin.com/in/rohan-tagalpallewar-428895214'><i class="fa-brands fa-linkedin "></i></a>
                    <a href='https://twitter.com/login?lang=en'><i class="fa-brands fa-twitter "></i></a>
                </div>
            </div>

            <div className='bottom'>

            {/* <div className='bottom1'> */}
                <div className='col1'>
                    <h1>Project</h1>
                    <a href='/'>Changelog</a><br></br>
                    <a href='/'>Status</a><br></br>
                    <a href='/'>License</a><br></br>
                    <a href='/'>All Versions</a><br></br>
                </div>

                <div className='col2'>
                    <h1>Community</h1>
                    <a href='/'>Git Hub</a><br></br>
                    <a href='/'>Issues</a><br></br>
                    <a href='/'>Project</a><br></br>
                    <a href='/'>Twitter</a><br></br>
                {/* </div> */}
                </div>
                {/* <div className='bottom2'> */}
                <div className='col3'>
                    <h1>Help</h1>
                    <a href='/'>Support</a><br></br>
                    <a href='/'>Troubleshooting</a><br></br>
                    <a href='/'>Contact Us</a><br></br>
                </div>

                <div className='col4'>
                    <h1>Others</h1>
                    <a href='/'>Terms of Service</a><br></br>
                    <a href='/'>Privacy Policy</a><br></br>
                    <a href='/'>License</a><br></br>
                {/* </div> */}
                </div>

            </div>

        </div>

    )

}
export default Footer;
