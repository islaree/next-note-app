import { FormEvent, useState } from 'react';
import { Note } from '../../types/note';
import { SendHorizontal } from 'lucide-react';

export default function NoteCreateForm({ onAdd }: { onAdd: (newNote: Note) => void }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content) {
      setContent('');
      onAdd({ id: Date.now(), content: content, important: false });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="border border-gray-200 bg-gray-50 rounded-md">
        <textarea
          value={content}
          placeholder="Add a note here ..."
          className="block w-full h-20 px-4 py-2 bg-transparent text-md resize-none focus-visible:outline-none"
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end p-2">
          <button className="bg-black text-white rounded-md text-sm p-2">
            <SendHorizontal size={20} />
          </button>
        </div>
      </div>
    </form>
  );
}
