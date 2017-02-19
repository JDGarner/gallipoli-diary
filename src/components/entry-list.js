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
          {this.state.entries.map((e, i) =>
            <Entry
              key={i}
              entry={e}
              alignLeft={i % 2 === 0}
              firstEntry={i === 0}
              isFirstEntryOfMonth={this.isFirstEntryOfMonth(e)}
              showLightbox={this.onShowLightbox.bind(this)} />
          )}
          { this.renderLightbox() }
        </div>
      );
    } else {
      return null
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
}

export default EntryList;
