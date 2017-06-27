import React from 'react';
import { connect } from 'react-redux';

const StickyNoteForm = ({ nextId, dispatch }) => {
 let title;
 let body;
 let color;

 return (
   <div>
     <h3>Add A Sticky Note</h3>
     <form
       onSubmit={ e => {
         e.preventDefault();
         dispatch({
           type: 'ADD_NOTE',
           note: { id: nextId, title: title.value, body: body.value, color: color.value }
         });
         dispatch({ type: 'INC_ID' })
         title.value = null;
         body.value = null;
         color.value = null;
       }}
     >
      <input placeholder="Title" ref={ n => title = n } />
      <input placeholder="Subject" ref={ n => body = n } />
      <select placeholder="Color" ref={ n => color = n} >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <button type="submit">Submit</button>
     </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { nextId: state.nextId }
}

export default connect(mapStateToProps)(StickyNoteForm);
