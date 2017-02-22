import React from 'react';
import ThumbnailImage from './thumbnail-image';
import config from '../config';

class Entry extends React.Component {

  render() {
    let entry = this.props.entry;

    return (
      <div className="entry">
        { this.renderEntryMonth(entry.month) }
        <div className="entry-date">{entry.date}</div>
        <div className="entry-content">
          <div className="entry-day">{entry.day}</div>
          <div className="entry-text">'{entry.content}'</div>
          { this.renderImage(entry.imageurl, entry.imagenote) }
          { entry.note ? <div className="entry-text note"><b>Note -</b> {entry.note}</div> : null }
        </div>
      </div>
    );
  }

  renderEntryMonth(month) {
    if (this.props.isFirstEntryOfMonth) {
      return (
        <div className="entry-month">
          <span>{month}</span>
        </div>
      );
    } else {
      return null;
    }
  }

  renderImage(imageSrc, imageNote) {
    if(imageSrc) {
      let imagePath = config.cdnHost + imageSrc;

      return (
        <ThumbnailImage
          imagePath={imagePath}
          imageNote={imageNote}
          showLightbox={this.props.showLightbox.bind(this)} />
      );
    } else {
      return null;
    }
  }
}

export default Entry;
