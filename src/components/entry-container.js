import React from 'react';
import Request from 'superagent';
import Entry from './entry';
import config from '../config';

class EntryContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };
  }

  componentDidMount() {
    var url = config.diaryApiHost + '/entries';

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
    if (this.state.entries) {
      return (
        <div className="entry-container">
          {this.state.entries.map(e =>
              <Entry entry={e} />
          )}
        </div>
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
