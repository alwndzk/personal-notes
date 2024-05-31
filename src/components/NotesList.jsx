import React from 'react';
import NotesItem from './NotesItem';

function NotesList({ notes, onDelete }){
    return (
        <>
        <h2>Catatan Aktif</h2>
        <div className='notes-list'>
              {notes.length > 0 ? (
                notes.map((note) => (
                    <NotesItem 
                    key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    title={note.title}
                    body={note.body}
                    createdAt={note.createdAt}
                    />
                ))
        )   :   (
            <p className='notes-list__empty-message'>Tidak ada catatan..</p>
        )}
        </div>
        </>
    );
}

export default NotesList;