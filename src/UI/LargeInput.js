import React from 'react';
import classes from './LargeInput.module.css';

function LargeInput(props) {
    return (
        <>
            <input 
                id='title-input'
                type='text'
                placeholder='Title'
                value={props.titleValue}
                onChange={props.onChange}
                autoFocus
                className={classes['title-input']}
            />
            <textarea
                id='body-input'
                type='text'
                placeholder='Body'
                value={props.bodyValue}
                onChange={props.onChange}
                className={classes['body-input']}
                rows={4}
            >
                
            </textarea> 
        </>
    )
}

export default LargeInput;