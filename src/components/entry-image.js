import React from 'react';

class EntryImage extends React.Component {

  render() {
    return (
      <div className="entry-image" onClick={this.enlargeImage}>
        <img src="https://s9.postimg.org/l09va3qxr/diary.jpg"/>
        {
          this.props.showZoomLabel ?
            <span>Tap me to zoom</span> :
            null
        }
      </div>
    );
  }

  enlargeImage() {
    console.log('ZOOOM!');
  }
}

export default EntryImage;
