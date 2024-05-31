import React from 'react';
import NotesList from './NotesList';
import { getInitialData } from '../utils/index';
import NotesInput from './NotesInput';

class NotesApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }
    onDeleteHandler(id) {
        const notes = this.state.notes.filter(notes => notes.id !== id);
        this.setState({ notes });
    }
    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            const newNote = {
                id: +new Date(),
                title,
                body,
                createdAt: new Date().toISOString(),
                archived: false,
            };
            const updatedNotes = [...prevState.notes, newNote];
            console.log(updatedNotes);
            return { notes: updatedNotes };
        });
    }

    render() {
        return (
            <div className='note-app'>
                <div className='note-app__header'>
                    <h1>Personal Notes</h1>
                </div>
                <div className="note-app__body">
                    <NotesInput addNote={this.onAddNoteHandler} />
                    <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
                </div>
            </div>
        );
    }
}

export default NotesApp;