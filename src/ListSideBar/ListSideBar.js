import React from 'react';
import { NavLink } from 'react-router-dom';

function ListSideBar(props) {
  const folderLinks = props.folders.map((folder) => {
    return (
      <NavLink
        to={`/folder/${folder.id}`}
        className="folder-link"
        activeClassName="selected"
      >
        {folder.name}
      </NavLink>
    );
  });

  return (
    <div className="side-bar">
      {folderLinks}
      <button>Add Folder</button>
    </div>
  );
}

export default ListSideBar;
