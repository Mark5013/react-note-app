import React, { useContext } from 'react';
import NoteContext from '../store/note-context';
import classes from './NoteList.module.css';
import Note from './Note';

function NoteList() {
    const noteCtx = useContext(NoteContext);

    return (
        <div className={`${classes['note-list']} container`}>
            <div className="row">
                {noteCtx.notes.map(note => <div key={note.id} className="col-lg-3 col-md-6"><Note id={note.id} title={note.titleText} body={note.bodyText}/></div>)}
            </div>
        </div>
    )
}

export default NoteList;