import React from 'react';
import EntryImage from './entry-image';
import cx from 'classnames';

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.entryClasses = cx("entry-container", {
      "left-entry": this.props.alignLeft,
      "right-entry": !this.props.alignLeft,
    });
  }

  render() {
    let entry = this.props.entry;

    return (
      <div className={this.entryClasses}>
        <div className="entry-date">{entry.date}</div>
        <div className="entry-content">
          <div className="entry-day">{entry.day}</div>
          <div className="entry-text">{entry.content}</div>
          { this.renderImage(entry.imageURL) }
          { entry.note ? <div className="entry-text">{entry.note}</div> : null }
        </div>
      </div>
    );
  }

  renderImage(imageSrc) {
    if(imageSrc || true) {
      return (
        <EntryImage
          showZoomLabel={this.props.firstEntry}
          imageSrc={imageSrc}
          showLightbox={this.props.showLightbox.bind(this)} />
      );
    } else {
      return null;
    }
  }
}

export default Entry;
