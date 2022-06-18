import React from 'react';
import classes from './ErrorModal.module.css';
import ReactDOM from 'react-dom';

function BackDrop(props) {

    return ( 
        <div className={classes.backdrop} onClick={props.onClick}>
        </div>
    );
}

function Modal(props) {
    return (
        <div className={classes.modal}>
            <h3>Invalid Input</h3>
            <p>Title and body field must have some input.</p>
            <button className={classes.button} onClick={props.onClick}>Ok</button>
        </div>
    )
}

function ErrorModal(props) {
    return (
        <>
            {ReactDOM.createPortal(<BackDrop onClick={props.onClick}/>, document.getElementById('overlay'))}
            {ReactDOM.createPortal(<Modal onClick={props.onClick}/>, document.getElementById('overlay'))}
        </>
            
    )
}

export default ErrorModal;