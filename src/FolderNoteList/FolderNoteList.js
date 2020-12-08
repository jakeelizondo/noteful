import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

function FolderNoteList(props) {
  let folderId = props.match.params.folderId;

  const filteredNotes = props.notes.filter(
    (note) => note.folderId === folderId
  );

  const notes = filteredNotes.map((note) => {
    let date = new Date(note.modified);
    let formatted = format(date, 'do LLL yyyy');

    return (
      <li className="note" key={note.id}>
        <div>
          <Link to={`/note/${note.id}`}>
            <h2>{note.name}</h2>
          </Link>
        </div>
        <div>
          <p>Note modified on: {formatted}</p>
          <button>Delete Note</button>
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul>{notes}</ul>
      <button>Add Note</button>
    </div>
  );
}

export default FolderNoteList;
