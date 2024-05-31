import React from 'react';

class NotesInput extends React.Component{
    constructor(props) {
        super(props);

        //menginisialiasi state
        this.state = {
            title: '',
            body: '',
            charLimit: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    onTitleChangeEventHandler(event){
        const {value} = event.target;
        if(value.length <= 50){
        const charLimit = 50 - value.length;

        this.setState({
            title: value,
            charLimit: charLimit >= 0 ? charLimit : 0,
        });
      }
    }

    onBodyChangeEventHandler(event){
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }
    
    onSubmitEventHandler(event){
        event.preventDefault();
        const newNote = {
            id: new Date().toISOString(),
            title: this.state.title,
            body: this.state.body,
            archived: false,
            createdAt: new Date().toISOString(),
        };
        this.props.addNote(newNote)
        this.resetForm();
    }
    resetForm(){
        this.setState({
            title: '',
            body: '',
            charLimit: 50,
        });
    }

    render(){
        return(
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <h2 className='note-input__title'>Buat Catatan</h2>
                <h3 className='note-input__title__char-limit'>Sisa Karakter: {this.state.charLimit}</h3>
                <input type="text" placeholder='Masukkan Judul..' value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
                <textarea placeholder='Tulis catatanmu disini...' value={this.state.body} onChange={this.onBodyChangeEventHandler} required/>
                <button type='submit'>Buat</button>
            </form>
        )
    }
} 

export default NotesInput;