import React from "react";
import {Form} from "react-bootstrap";

function Input(props){
    const {label,type,name,placeholder,register}= props
    return(
        <div>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type || "text"} name={name} placeholder={placeholder || ""}{...register}/>
        </div>
    )
}
export default Input