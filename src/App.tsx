import { useState } from 'react';
import NoteCreateForm from './components/NoteCreateForm';
import NoteList from './components/NoteList';
import { Note, Notes } from './types/note';

export default function App() {
  const [notes, setNotes] = useState<Notes>([]);

  const handleAddNote = (newNote: Note) => {
    setNotes([newNote, ...notes]);
  };

  const handleDeleteNote = (id: number) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  const handleEditNote = (newNote: Note) => {
    setNotes(notes.map((n) => (n.id === newNote.id ? newNote : n)));
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-extrabold mb-4">Your Note</h1>
      <NoteCreateForm onAdd={handleAddNote} />
      <NoteList data={notes} onDelete={handleDeleteNote} onEdit={handleEditNote} />
    </div>
  );
}
