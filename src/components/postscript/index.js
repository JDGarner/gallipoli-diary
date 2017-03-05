import React from 'react';
import TextSection from '../text-section';
import ThumbnailImage from '../thumbnail-image';
import Config from '../../config';

class PostScript extends React.Component {
  constructor() {
    super();
    this.textSectionOne = [
      `The entry written on 17th August 1915 is the last in Bampa's diary.`,
      `The fighting on the Helles front had now reached a stalemate.
       The Turkish trench system rivalled anything to be found on the
       Western Front and there was going to be no breakthrough.`,
      `It was not until 23rd November 1915 that the War Committee
       recommended a full evacuation to Cabinet.`
    ];

    this.textSectionTwo = [
      `Evacuation of 75,000 men began in secrecy on the night of 18th December.
      The gradual retreat of men and artillery included the use of self-firing
      rifles and dummy soliders after the last of the men had left.`,
      `The operation was completed without any casualties and without the
      Turks realising what was happening.`,
      `On 8th January 1916 the final evacuation took place.`
    ];

    this.textSectionThree = [
      `After the Gallipoli evacuation, Bampa was sent to the western front.`,
      `Where he was stationed is unknown as his records were destroyed along
      with 6.5 million others during bombing raids in World War 2.`,
      `The fighting on the western front continued for 2 years and 10 months until an Allied
      victory on 11th November 1918.`,
      `Against the odds, Bampa survived the war and returned home.`
    ];

    this.textSectionFour = [
      `Thank you for reading`,
      `Feel free to send questions or feedback to jamiegarner123@gmail.com`
    ];
  }

  render() {
    let imgPath1 = Config.cdnHost + "dummy-soldiers.jpg";
    let imgPath2 = Config.cdnHost + "evacuation.jpg";
    let imgPath3 = Config.cdnHost + "bampa-wedding.jpg";
    let imgPath4 = Config.cdnHost + "old-bampa.jpg";

    return (
      <div className="postscript">
        <h2>Postscript</h2>
        <TextSection text={this.textSectionOne} />
        <ThumbnailImage
          imagePath={imgPath1}
          imageNote="Dummy soliders used to help evacuation"
          showLightbox={this.props.showLightbox.bind(this)} />
        <TextSection text={this.textSectionTwo} />
        <ThumbnailImage
          imagePath={imgPath2}
          imageNote="Landing on island of Lemnos after evacuation"
          showLightbox={this.props.showLightbox.bind(this)} />
        <TextSection text={this.textSectionThree} />
        <ThumbnailImage
          imagePath={imgPath3}
          imageNote="Bampa and Margaret on their wedding day - 15th June 1921"
          showLightbox={this.props.showLightbox.bind(this)} />
        <ThumbnailImage
          imagePath={imgPath4}
          imageNote="Bampa and Margaret about 40 years later"
          showLightbox={this.props.showLightbox.bind(this)} />
        <TextSection text={this.textSectionFour} />
      </div>
    );
  }
}

export default PostScript;
