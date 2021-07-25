import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/dev.png';
import '../App.css';

class Home extends Component {
render() {
return (
<div className="condiv home">
<img src={profilepic} className="profilepic"></img>
<br></br>
<ReactTypingEffect className="typingeffect typefont wfont" text={['I am XYZ','I am a web developer']} speed={100} eraseDelay={700}/>

</div>
)
}
}
export default Home