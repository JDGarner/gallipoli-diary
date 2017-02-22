import React from 'react';
import EntryList from './entry-list';
import Home from './home';
import Intro from './intro';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Home />
        <Intro />
        <EntryList />
      </div>
    );
  }
}

export default App;
