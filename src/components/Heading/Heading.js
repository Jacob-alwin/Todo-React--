import React,{useEffect} from 'react'
import './heading.css'
import $ from 'jquery'
function Heading(props) {

    useEffect(() => {
        const id="#"+props.id
      $(id).css("backgroundColor", props.color);
      
    })

    const change = ()=>{
        if(props.id==='todo'){
            const id="#"+props.id
      $(id).css("backgroundColor", "#00D1D1");
        }
    }

    const changeBack = ()=>{
        if(props.id==='todo'){
            const id="#"+props.id
      $(id).css("backgroundColor", props.color);
        }
    }
    
    return (
        <div id={props.id} className="card card-heading"  onMouseOver={change} onMouseLeave={changeBack} >
            <div className="card-body card-body-heading">
                {props.heading}
            </div>
        </div>
    )
}


export default Heading
