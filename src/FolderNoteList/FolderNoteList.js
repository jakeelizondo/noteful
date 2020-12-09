import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import AppContext from '../AppContext';

class FolderNoteList extends React.Component {
  static contextType = AppContext;

  handleDelete = (noteId) => {
    const deleteUrl = `http://localhost:9090/notes/${noteId}`;

    fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        } else {
          this.context.handleDelete(noteId);
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { notes } = this.context;
    let folderId = this.props.match.params.folderId;

    const filteredNotes = notes.filter((note) => note.folderId === folderId);

    const notesArray = filteredNotes.map((note) => {
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
            <button onClick={() => this.handleDelete(note.id)}>
              Delete Note
            </button>
          </div>
        </li>
      );
    });

    return (
      <div>
        <ul>{notesArray}</ul>
        <button>Add Note</button>
      </div>
    );
  }
}

export default FolderNoteList;
