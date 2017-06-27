import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';

const filtered = (notes, filter) => {
  switch (filter) {
    case 'All':
      return notes;
    case 'Active':
      return notes.filter( t => !t.complete )
    case 'Completed':
      return notes.filter( t => t.complete )
    default:
      return notes;
  }
}


const Board = ({ notes, filter }) => (
  <ul>
    { filtered(notes, filter).map( (t) => {
      return ( <Note key={t.id}{...t}/>
      )
     })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { notes: state.notes, filter: state.filter }
}

export default connect(mapStateToProps)(Board)
