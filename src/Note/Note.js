import React, { useContext } from 'react';
import classes from './Note.module.css';
import NoteContext from '../store/note-context';

function Note(props) {
    const noteCtx = useContext(NoteContext);

    function handleClick(event) {
        noteCtx.removeNote(event.target.value);
    }

    return (
        <div className={classes.note}>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <button value={props.id} onClick={handleClick} type="submit" className={classes.button}>Delete</button>
        </div>
    )
}

export default Note;