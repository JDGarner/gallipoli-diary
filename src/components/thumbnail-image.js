import React from 'react';

class ThumbnailImage extends React.Component {

  render() {
    return (
      <div className="thumbnail-image" onClick={this.zoomInImage.bind(this)}>
        <img src={this.props.imagePath}/>
        { this.renderImageNote(this.props.imageNote) }
      </div>
    );
  }

  renderImageNote(note) {
    if (note) {
      return (
        <span className="image-note">{note}</span>
      );
    } else {
      return null;
    }
  }

  zoomInImage(e) {
    e.stopPropagation();
    this.props.showLightbox(this.props.imagePath);
  }
}

export default ThumbnailImage;
