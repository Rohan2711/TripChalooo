
import './HeroStyle.css'
function Hero(props){
    //For making our hero.js dynamic we are adding props
    return(
<> 
<div className={props.cName}>
{/* <img alt="HeroImg" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZSUyMGxhbmRzY2FwZSUyMGhkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 "
height="650px"
width="100%" 
></img> */}
{/* height={props.imgHeight} width={props.imgWidth} */}
<img alt="HeroImg" src={props.heroImg} height={props.imgHeight} width={props.imgWidth} ></img>
{/* in React while using <img></img> tag we have to use alt and we cannot keep it empty */}

<div className='Hero-Text'>
    {/* <h1>Life is not meant to be in one place.</h1> */}
    <h1>{props.title}</h1>
    {/* <p>Choose Your Dream Destination</p> */}
    <p>{props.text} </p>
    <a href={props.url} className={props.btnClass}>{props.btnText}</a>
    </div>
</div>
</>
    )
}
export default Hero;