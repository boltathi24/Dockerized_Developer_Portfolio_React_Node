import React, { Component } from 'react'
import '../App.css';
class Skills extends Component {
constructor(props)
{
super(props);
this.state={
'myskills':['Security Testing','Java','Python','PHP','REACT JS','Node Js','VAPT']
};
}
render() {
return (
<div className="condiv skills wfont">
<h1 className="subtopic">My Skills</h1>
<ul className="list-group">
{this.state.myskills.map((value)=>{
return <li className="list-group-item" >{value}</li>
})}
</ul>
</div>
)
}
}
export default Skills