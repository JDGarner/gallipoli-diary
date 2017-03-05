import React from 'react';
import TextSection from '../text-section';
import ThumbnailImage from '../thumbnail-image';
import Config from '../../config';

class Intro extends React.Component {
  constructor() {
    super();
    this.textSectionOne = [
      `The Gallipoli Campaign was one of the Allies great disasters in World War One.`,
      `It was intended to end the war by creating a new front that the Axis powers could not cope with.`,
      `It resulted in nearly 500,000 casualties, including 100,000 killed.`
    ];

    this.textSectionTwo = [
      `Frederick Richard Goddard (known as Bampa to his Grandchildren) enlisted on 26th January 1915
        and was sent to Gallipoli to work as a stretcher bearer.`,
      `The following diary was transcribed by David Garner, Grandson of Bampa.`
    ];
  }

  render() {
    let imgPath = Config.cdnHost + "young-b.jpg";

    return (
      <div className="intro">
        <TextSection text={this.textSectionOne} />
        <ThumbnailImage
          imagePath={imgPath}
          imageNote="Bampa before leaving for Gallipoli, aged 21 (Tap to zoom)"
          showLightbox={this.props.showLightbox.bind(this)} />
        <TextSection text={this.textSectionTwo} />
      </div>
    );
  }
}

export default Intro;
