import { useState } from 'react';
import { Note, Notes } from '../../types/note';
import NoteItem from './NoteItem';

export default function NoteList({
  data,
  onDelete,
  onEdit,
}: {
  data: Notes;
  onDelete: (id: number) => void;
  onEdit: (newNote: Note) => void;
}) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <div className="mt-10 space-x-2 pb-4 mb-4 text-gray-400 border-b border-gray-200">
        <button
          className={`${tabIndex === 0 && 'text-black bg-gray-200'} rounded py-1 px-2`}
          onClick={() => setTabIndex(0)}
        >
          all notes
        </button>
        <button
          className={`${tabIndex === 1 && 'text-black bg-gray-200'} rounded py-1 px-2`}
          onClick={() => setTabIndex(1)}
        >
          important notes
        </button>
      </div>
      {tabIndex === 0 && (
        <ul className="space-y-4">
          {data.length ? (
            data.map((note) => <NoteItem key={note.id} data={note} onDelete={onDelete} onEdit={onEdit} />)
          ) : (
            <p className="text-gray-400">No data ...</p>
          )}
        </ul>
      )}
      {tabIndex === 1 && (
        <ul>
          {data.filter((note) => note.important).length ? (
            data
              .filter((note) => note.important)
              .map((note) => {
                return <NoteItem key={note.id} data={note} onDelete={onDelete} onEdit={onEdit} />;
              })
          ) : (
            <p className="text-gray-400">No data ...</p>
          )}
        </ul>
      )}
    </>
  );
}
