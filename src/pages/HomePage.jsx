import React from 'react';
import NotesList from '../components/NotesList';
import { deleteNote, getNotes } from '../utils/index';

class HomePageNotes extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notes: getNotes()
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id){
        deleteNote(id);

    //update notes state dari index.js
    this.setState(() => {
        return {
            notes: getNotes(),
        }
      });
    }
    render(){
        return(
            <section>
                <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
            </section>
        )
    }
}

export default HomePageNotes;