import React from 'react';
import { connect } from 'react-redux';

const Note = ({id, title, body, color, complete, dispatch }) => (
    <li
      onClick={()=> dispatch({ type: 'TOGGLE_NOTE', id})}
      style={ complete ? {textDecoration: 'line-through', backgroundColor: 'grey'} : {}}
      >
      <div className="note" style={{backgroundColor: `${color}`}}>
        {title}<br/>
        {body}
      </div>
    </li>
)
export default connect()(Note)
