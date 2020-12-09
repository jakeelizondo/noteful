import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';

function MainSideBar() {
  return (
    <AppContext.Consumer>
      {({ folders }) => (
        <div className="side-bar">
          {folders.map((folder) => {
            return (
              <Link
                className="folder-link"
                key={folder.id}
                to={`/folder/${folder.id}`}
              >
                {folder.name}
              </Link>
            );
          })}
          <button>Add Folder</button>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default MainSideBar;
