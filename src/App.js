import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import './App.css';
import MainSideBar from './MainSideBar/MainSideBar';
import NoteSideBar from './NoteSideBar/NoteSideBar';
import ListSideBar from './ListSideBar/ListSideBar';
import NoteList from './NoteList/NoteList';
import FolderNoteList from './FolderNoteList/FolderNoteList';
import Note from './Note/Note';
import NotFound from './NotFound/NotFound';
import AppContext from './AppContext';

class App extends React.Component {
  state = {
    folders: [],
    notes: [],
  };

  getFolders = () => {
    const folderURL = 'http://localhost:9090/folders';
    fetch(folderURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then((data) => {
        console.log(data);
        this.setState({ folders: data });
      })
      .catch((error) => console.log(error.message));
  };

  getNotes = () => {
    const folderURL = 'http://localhost:9090/notes';
    fetch(folderURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then((data) => {
        console.log(data);
        this.setState({ notes: data });
      })
      .catch((error) => console.log(error.message));
  };

  handleDelete = (noteId) => {
    console.log(`need to delete ${noteId} from state`);
    console.log(this.state.notes.length);
    let newNotes = this.state.notes.filter((note) => note.id !== noteId);
    console.log(newNotes.length);
    this.setState({ notes: newNotes });
  };

  componentDidMount() {
    this.getFolders();
    this.getNotes();
  }

  render() {
    console.log('you can do this Jake');
    return (
      <main className="App">
        <Header />
        <AppContext.Provider
          value={{
            folders: this.state.folders,
            notes: this.state.notes,
            handleDelete: this.handleDelete,
          }}
        >
          <div className="app-window">
            <section className="side-bar-section">
              <Route exact path="/" component={MainSideBar} />
              <Route exact path="/folder/:folderId" component={ListSideBar} />
              <Route path="/note/:noteId" component={NoteSideBar} />
            </section>
            <section className="main">
              <Switch>
                <Route exact path="/" component={NoteList} />
                <Route path="/folder/:folderId" component={FolderNoteList} />
                <Route path="/note/:noteId" component={Note} />
                <Route component={NotFound} />
              </Switch>
            </section>
          </div>
        </AppContext.Provider>
      </main>
    );
  }
}

export default App;
