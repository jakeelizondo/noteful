import React from 'react';
import { Link } from 'react-router-dom';

function MainSideBar(props) {
  const folderLinks = props.folders.map((folder) => {
    return (
      <Link className="folder-link" key={folder.id} to={`/folder/${folder.id}`}>
        {folder.name}
      </Link>
    );
  });

  return (
    <div className="side-bar">
      {folderLinks}
      <button>Add Folder</button>
    </div>
  );
}

export default MainSideBar;
