import React from 'react';

class EntryImage extends React.Component {

  render() {
    return (
      <div className="entry-image" onClick={this.zoomInImage.bind(this)}>
        <img src={this.props.imagePath}/>
        { this.renderImageNote(this.props.imageNote) }
      </div>
    );
  }

  renderImageNote(note) {
    if (note) {
      return (
        <span>{note}</span>
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

export default EntryImage;
