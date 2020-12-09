import React from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../AppContext';

function ListSideBar() {
  return (
    <AppContext.Consumer>
      {({ folders }) => (
        <div className="side-bar">
          {folders.map((folder) => {
            return (
              <NavLink
                to={`/folder/${folder.id}`}
                className="folder-link"
                activeClassName="selected"
              >
                {folder.name}
              </NavLink>
            );
          })}
          <button>Add Folder</button>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default ListSideBar;
