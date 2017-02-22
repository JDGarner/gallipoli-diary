import React from 'react';
import ThumbnailImage from './thumbnail-image';
import Config from '../config';

class Intro extends React.Component {

  render() {
    let imgPath = Config.cdnHost + "bampa-trench.jpg";

    return (
      <div className="intro">
        <div className="intro-text one">
          <span>The Gallipoli Campaign was one of the Allies great disasters in World War One.</span>
          <span>It was intended to end the war by creating a new front that the Axis powers could not cope with.</span>
          <span>It resulted in nearly 500,000 casualties, including 100,000 killed.</span>
        </div>
          <ThumbnailImage
            imagePath={imgPath}
            imageNote="Bampa sitting on the left (Tap to zoom)"
            showLightbox={this.props.showLightbox.bind(this)} />
        <div className="intro-text two">
          <span>Frederick Richard Goddard (known as Bampa to his Grandchildren) enlisted on 26th January 1915,
            aged 21, and was sent to Gallipoli to work as a stretcher bearer.</span>
          <span>The following diary was transcribed by David Garner, Grandson of Bampa.</span>
        </div>
      </div>
    );
  }
}

export default Intro;
