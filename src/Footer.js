import React from 'react';

const Footer=(props)=>{
    return (
        <div style={{textAlign: "center"}}>
            Copyright ©{props.year} {props.name} {props.lname}
        </div>
    )
}
export default Footer;