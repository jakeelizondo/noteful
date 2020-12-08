import React from 'react';
import { format } from 'date-fns';

function Note(props) {
  const noteId = props.match.params.noteId;

  let note = props.notes.filter((note) => note.id === noteId);
  note = note[0];

  let date = new Date(note.modified);
  let formatted = format(date, 'do LLL yyyy');

  return (
    <section className="note">
      <div className="note-title">
        <h2>{note.name}</h2>
      </div>
      <div className="note-details">
        <p>Note modified on: {formatted}</p>
        <button>Delete Note</button>
      </div>
      <div>{note.content}</div>
    </section>
  );
}

export default Note;
