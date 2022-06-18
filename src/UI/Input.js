import React from 'react';
import classes from './Input.module.css';

function Input(props) {

    return (
        <input 
            className={classes.input}
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
        />
    )
}

export default Input;