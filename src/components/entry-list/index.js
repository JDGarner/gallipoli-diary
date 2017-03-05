import React from 'react';
import cx from 'classnames';
import Entry from '../entry';

class EntryList extends React.Component {
  constructor() {
    super();
    this.state = {
      showAbridgedVersion: true
    };
    this.currentMonth = '';
  }

  render() {
    return (
      <div className="entry-list">
        { this.renderVersionButtons() }
        {this.props.entries.map((e, i) =>
          this.renderEntry(e, i)
        )}
      </div>
    );
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
