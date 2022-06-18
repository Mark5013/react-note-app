import React, {useReducer} from 'react';
import NoteContext from './note-context';

function noteReducer(state, action) {
    
    switch(action.type) {
        case 'ADD_NOTE':
            let updatedState = {...state, notes: [...state.notes, action.note]};
            return updatedState;
        case 'REMOVE_NOTE':
            let updatedArr = state.notes.filter(item => item.id !== action.id);
            let newState = {...state, notes: [...updatedArr]}
            return newState;
        default:
            return state;
    }
    
}

function NoteContextProvider(props) {

    const [noteContext, dispatchNote] = useReducer(noteReducer, {notes: [], addNote: addNote, removeNote: removeNote});

    function addNote(note) {
        dispatchNote({type: "ADD_NOTE", note: note});
    }

    function removeNote(id) {
        dispatchNote({type: "REMOVE_NOTE", id: id});
    }


    return (
        <NoteContext.Provider value={noteContext}>
            {props.children}
        </NoteContext.Provider>
    );

}

export default NoteContextProvider;