import Form from './components/Form';
import './App.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import List from './components/List';
function App() {
  const INITIAL_NOTES = [
    { id: nanoid(), date: '2000-01-01', km: 300 },
    { id: nanoid(), date: '2001-11-15', km: 400 },
  ];

  const [notes, setNotes] = useState(INITIAL_NOTES);

  const handleAddNote = (newNote) => {
    const indexOfDate = notes.findIndex((item) => item.date === newNote.date);
    if (indexOfDate === -1) {
      setNotes((prevNotes) => [...prevNotes, newNote]);
    } else {
      setNotes((prevNotes) => {
        const newNotes = [...prevNotes];
        newNotes[indexOfDate].km += newNote.km;
        return newNotes;
      });
    }
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <header>
        Учет тренировок
      </header>
      <Form onSubmit={handleAddNote}/>
      <List notes={notes} onDeleteNote={handleDeleteNote} />
    </div>
  );
}

export default App;
