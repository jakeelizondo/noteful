import React from 'react';
import AppContext from '../AppContext';

class NoteSideBar extends React.Component {
  static contextType = AppContext;

  render() {
    console.log(this.context);
    const { folders, notes } = this.context;
    console.log(notes);
    const currentNoteId = this.props.match.params.noteId;

    const currentNote = notes.find((note) => note.id === currentNoteId) || {
      folderId: currentNoteId,
    };
    console.log(currentNote);
    const currentFolderId = currentNote.folderId;
    const currentFolder = folders.find(
      (folder) => folder.id === currentFolderId
    ) || { name: '' };
    return (
      <div className="note-bar">
        <button onClick={() => this.props.history.goBack()}>Back</button>
        <h2>{currentFolder.name}</h2>
      </div>
    );
  }
}

export default NoteSideBar;
