import React, { Component } from 'react';
import StickyNoteForm from './components/StickyNoteForm';
import Board from './components/Board';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
 render() {
 return (
   <div className="App">
     <StickyNoteForm />
     <Board />
     <Footer />
    </div>
   );
  }
}

export default App;
