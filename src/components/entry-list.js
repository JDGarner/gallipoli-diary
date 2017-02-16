import React from 'react';
import Request from 'superagent';
import Entry from './entry';
import config from '../config';

class EntryList extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: []
    };
  }

  componentDidMount() {
    var url = config.diaryApiHost + '/entries';

    Request.get(url).end((err, response) => {
      if (err) {
        console.log('There was an error fetching from API', err);
      } else if (response) {
        this.setState({
          entries: response.body
        });
      }
    });
  }

  render() {
    if (this.state.entries && this.state.entries.length > 0) {
      return (
        <div className="entry-list">
          {this.state.entries.map((e, i) =>
              <Entry entry={e} key={i} alignLeft={i % 2 === 0} />
          )}
        </div>
      );
    } else {
      return null
    }
  }
}

export default EntryList;
