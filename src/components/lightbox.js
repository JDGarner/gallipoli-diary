import React from 'react';

class Lightbox extends React.Component {

  render() {
    return (
      <div className="lightbox" onClick={this.props.hideLightbox}>
        <img src={this.props.imageSrc}/>
      </div>
    );
  }
}

export default Lightbox;
