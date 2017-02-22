import React from 'react';
import Request from 'superagent';
import cx from 'classnames';
import Entry from './entry';
import config from '../config';

class EntryList extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      showAbridgedVersion: true
    };
    this.currentMonth = '';
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
          { this.renderVersionButtons() }
          {this.state.entries.map((e, i) =>
            this.renderEntry(e, i)
          )}

        </div>
      );
    } else {
      return null
    }
  }

  renderVersionButtons() {
    let fullVersionClasses = cx(
      {'active': this.state.showAbridgedVersion},
      {'greyed-out': !this.state.showAbridgedVersion}
    );

    let abridgedVersionClasses = cx(
      {'active': !this.state.showAbridgedVersion},
      {'greyed-out': this.state.showAbridgedVersion}
    );

    return(
      <div className="version-buttons">
        <span
          className={fullVersionClasses}
          onClick={this.changeToFullVersion.bind(this)}>
          Read Full Version
        </span>
        <span
          className={abridgedVersionClasses}
          onClick={this.changeToAbridgedVersion.bind(this)}>
          Read Abridged Version
        </span>
      </div>
    );
  }

  changeToFullVersion() {
    if (this.state.showAbridgedVersion) {
      this.setState({
        showAbridgedVersion: false
      });
    }
  }

  changeToAbridgedVersion() {
    if (!this.state.showAbridgedVersion) {
      this.setState({
        showAbridgedVersion: true
      });
    }
  }

  renderEntry(e, i) {
    if (this.shouldDisplayEntry(e)) {
      return(
        <Entry
          key={i}
          entry={e}
          isFirstEntryOfMonth={this.isFirstEntryOfMonth(e)}
          showLightbox={this.props.showLightbox.bind(this)} />
      );
    } else {
      return null;
    }
  }

  isFirstEntryOfMonth(e) {
    if (e.month !== this.currentMonth) {
      this.currentMonth = e.month;
      return true;
    } else {
      return false;
    }
  }

  shouldDisplayEntry(e) {
    return (this.state.showAbridgedVersion && e.abridged) || !this.state.showAbridgedVersion;
  }
}

export default EntryList;
