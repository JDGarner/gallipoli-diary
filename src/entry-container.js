import React from 'react';
import Request from 'superagent';
import Entry from './entry';

class EntryContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };
  }

  componentDidMount() {
    // Move URL to config
    var url = 'https://diary-api.herokuapp.com/api/entries';

    Request.get(url).end((err, response) => {
      if (err) {
        console.log('There was an error fetching from API', err);
      } else {
        this.setState({
          entries: response.body,
          currentEntry: response.body[0]
        });
      }
    });
  }

  render() {
    if (this.state.currentEntry) {
      return (
        <Entry entry={this.state.currentEntry} />
      );
    } else {
      return null
    }
  }

  getEntry(pageNumber) {
    this.setState({
      currentEntry: this.state.entries[pageNumber],
      currentPage: pageNumber
    });
  }
}

export default EntryContainer;
