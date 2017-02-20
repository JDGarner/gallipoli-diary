import React from 'react';
import Request from 'superagent';
import Entry from './entry';
import Lightbox from './lightbox';
import config from '../config';

class EntryList extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      showAbridgedVersion: true,
      showLightbox: false,
      lightboxImageSrc: null
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
          <div className="version-button" onClick={this.changeVersion.bind(this)}>
            {this.getVersionButtonText()}
          </div>
          {this.state.entries.map((e, i) =>
            this.renderEntry(e, i)
          )}
          { this.renderLightbox() }
        </div>
      );
    } else {
      return null
    }
  }

  getVersionButtonText() {
    if (this.state.showAbridgedVersion) {
      return "Show Full Version";
    } else {
      return "Show Abridged Version";
    }
  }

  changeVersion() {
    this.setState({
      showAbridgedVersion: !this.state.showAbridgedVersion
    });
  }

  renderEntry(e, i) {
    if (this.shouldDisplayEntry(e)) {
      return(
        <Entry
          key={i}
          entry={e}
          isFirstEntryOfMonth={this.isFirstEntryOfMonth(e)}
          showLightbox={this.onShowLightbox.bind(this)} />
      );
    } else {
      return null;
    }
  }

  renderLightbox() {
    if(this.state.showLightbox) {
      return <Lightbox
        hideLightbox={this.onHideLightbox.bind(this)}
        imageSrc={this.state.lightboxImageSrc} />;
    } else {
      return null;
    }
  }

  onShowLightbox(imageSrc) {
    this.setState({
      showLightbox: true,
      lightboxImageSrc: imageSrc
    });
  }

  onHideLightbox() {
    this.setState({
      showLightbox: false,
      lightboxImageSrc: null
    });
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
