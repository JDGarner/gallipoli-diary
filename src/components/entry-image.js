import React from 'react';

class EntryImage extends React.Component {

  render() {
    return (
      <div className="entry-image" onClick={this.zoomInImage.bind(this)}>
        <img src="https://s9.postimg.org/l09va3qxr/diary.jpg"/>
        { this.renderZoomLabel() }
      </div>
    );
  }

  renderZoomLabel() {
    if (this.props.showZoomLabel) {
      return (
        <span>Tap me to zoom</span>
      );
    } else {
      return null;
    }
  }

  zoomInImage(e) {
    e.stopPropagation();
    this.props.showLightbox(this.props.imageSrc || "https://s9.postimg.org/l09va3qxr/diary.jpg");
  }
}

export default EntryImage;
