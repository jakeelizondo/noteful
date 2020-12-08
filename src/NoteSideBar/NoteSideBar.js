import React from 'react';

function NoteSideBar(props) {
  const currentNoteId = props.match.params.noteId;
  const currentNote = props.notes.find((note) => note.id === currentNoteId);
  const currentFolderId = currentNote.folderId;
  const currentFolder = props.folders.find(
    (folder) => folder.id === currentFolderId
  );

  return (
    <div className="note-bar">
      <button onClick={() => props.history.goBack()}>Back</button>
      <h2>{currentFolder.name}</h2>
    </div>
  );
}

export default NoteSideBar;
