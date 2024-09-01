import { useEffect, useState, useRef } from 'react';
import { Note } from '../../types/note';
import { Bookmark, SquarePen, Trash2 } from 'lucide-react';

export default function NoteItem({
  data,
  onDelete,
  onEdit,
}: {
  data: Note;
  onDelete: (id: number) => void;
  onEdit: (newNote: Note) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(data.content);
  const [isImportant, setIsImportant] = useState(data.important);
  const [height, setHeight] = useState(0);

  const contentRef = useRef<any>(null);

  const handleSave = () => {
    setEditing(false);
    onEdit({ ...data, content: value });
  };

  const handleCancel = () => {
    setValue(data.content);
    setEditing(false);
  };

  const handleChangeImportant = () => {
    setIsImportant(!isImportant);
    onEdit({ ...data, important: !isImportant });
  };

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.clientHeight;
      setHeight(contentHeight);
    }
  }, [editing]);

  return (
    <li className="border border-gray-200 rounded-md overflow-hidden">
      <div className="flex justify-end gap-x-4 px-6 py-2 bg-gray-50 border-b border-gray-200">
        <button className="text-gray-400 hover:text-black" onClick={handleChangeImportant}>
          <Bookmark size={16} className={`${data.important ? 'fill-yellow-500 text-yellow-500' : ' '}`} />
        </button>
        <button className="text-gray-400 hover:text-black" onClick={() => setEditing(true)}>
          <SquarePen size={16} />
        </button>
        <button className="text-gray-400 hover:text-black" onClick={() => onDelete(data.id)}>
          <Trash2 size={16} />
        </button>
      </div>
      {editing ? (
        <>
          <textarea
            style={{ height: `${height}px` }}
            className="block w-full p-6 resize-virtical bg-yellow-50 focus-visible:outline-2 focus-visible:outline-yellow-500"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="flex items-center justify-end px-6 py-2 gap-x-2 border-t border-gray-200">
            <button className="px-2 py-1 rounded bg-gray-200 text-sm text-black" onClick={handleCancel}>
              Cancel
            </button>
            <button className="px-2 py-1 rounded bg-blue-700 text-sm text-white" onClick={handleSave}>
              Save
            </button>
          </div>
        </>
      ) : (
        <div ref={contentRef} className="p-6">
          <p className="text-gray-600 whitespace-pre-wrap">{data.content}</p>
        </div>
      )}
    </li>
  );
}
