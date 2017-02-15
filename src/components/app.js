import React from 'react';
import EntryContainer from './entry-container';
import Home from './home';
import Intro from './intro';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Home />
        <EntryContainer />
      </div>
    );
  }
}

export default App;
