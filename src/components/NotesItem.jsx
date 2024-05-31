import React from 'react';
import NotesItemBody from './NotesItemBody';
import NotesItemAction from './NotesItemAction';

function NotesItem({ id, title, body, createdAt, onDelete}){
    return (
        <div className="note-item">
            <div className="note-item__content">
            <NotesItemBody title={title} body={body} createdAt={createdAt}/>
            </div>
            <div className="note-item__action">
            <NotesItemAction id={id} onDelete={onDelete} />
            </div>
        </div>
    )
}

export default NotesItem;
