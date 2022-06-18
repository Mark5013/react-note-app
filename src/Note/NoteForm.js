import React, { useReducer, useState, useContext } from 'react';
import classes from './NoteForm.module.css';
import Input from '../UI/Input';
import LargeInput from '../UI/LargeInput';
import NoteContext from '../store/note-context';
import uniqid from 'uniqid';
import ErrorModal from '../UI/ErrorModal';

    function noteTextReducer(state, action) {
       switch(action.id) {
            case 'title-input':
                return {...state, titleText: action.text};
            case 'body-input':
                return {...state, bodyText: action.text};
            case 'CLEAR_NOTE':
                return {titleText: "", bodyText: ""};
            default :
                return state;
       }
    }

function NoteForm() {
    
    const [noteText, dispatchNote] = useReducer(noteTextReducer, {titleText: "", bodyText: ""});
    const [showForm, setShowForm] = useState(false);
    const [invalidInput, setInvalidInput] = useState(false);
    const noteCtx = useContext(NoteContext);

    function handleOnFocus() {
        setShowForm(true);
    }

    function handleOnBlur(event) {
        //Check if we are switching between sibling inputs, if we AREN'T we hide the form
        if (!event.currentTarget.parentNode.contains(event.relatedTarget)){
            setShowForm(false);
        }
    }

    function handleOnChange(event) {
        dispatchNote({id: event.target.id, text: event.target.value});
    }

    function handleSubmit(event){
        event.preventDefault();
        if(noteText.titleText == "" || noteText.bodyText == "") {
            setInvalidInput(true);
            return;
        }
        
        noteCtx.addNote({...noteText, id: uniqid()});
        dispatchNote({id: "CLEAR_NOTE"});
    }

    function handleInvalidInput() {
        setInvalidInput(prev => !prev);
    }

    return (
        <form onSubmit={handleSubmit} onFocus={handleOnFocus} onBlur={handleOnBlur}   className={classes.form}>
            {invalidInput && <ErrorModal onClick={handleInvalidInput}/>}
            {showForm ? 
            <div className={classes['large-input']}>
                <LargeInput 
                    titleValue={noteText.titleText}
                    onChange={handleOnChange}
                    bodyValue={noteText.bodyText}
                />
                <button type="submit" className={classes.btn}>+</button>
            </div>:
            <Input 
                id={Math.random()}
                type="text"
                placeholder="Write a note..."
            />}

        </form>
    );
}

export default NoteForm;