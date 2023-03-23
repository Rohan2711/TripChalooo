import { Component } from "react";

class DestinationData extends Component{
    render(){
    return(
        
        <div className={this.props.cname}>
        <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
        </div>   
        <div className="Image"  >
            <img className='img1' alt="LAimg" src={this.props.img1}>
            </img>
            <img alt="LAimg1" src={this.props.img2}></img>
        </div>
    </div>
    )}
}
export default DestinationData;
