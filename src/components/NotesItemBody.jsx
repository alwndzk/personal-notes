import React from 'react';
import { showFormattedDate } from '../utils/index'
function NotesItemBody({ title, body, createdAt }){
    return(
        <div className=''>
            <h3 className='note-item__title'>{title}</h3>
            <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
            <p className='note-item__body'>{body}</p>
        </div>
    );
}

export default NotesItemBody;