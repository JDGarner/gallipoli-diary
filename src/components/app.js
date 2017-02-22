import React from 'react';
import EntryList from './entry-list';
import Home from './home';
import Intro from './intro';
import Lightbox from './lightbox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showLightbox: false,
      lightboxImageSrc: null
    };
  }

  render() {
    return (
      <div className="app">
        <Home />
        <div className="app-content">
          <Intro showLightbox={this.onShowLightbox.bind(this)} />
          <EntryList showLightbox={this.onShowLightbox.bind(this)} />
          { this.renderLightbox() }
        </div>
      </div>
    );
  }

  renderLightbox() {
    if(this.state.showLightbox) {
      return (
        <Lightbox
          hideLightbox={this.onHideLightbox.bind(this)}
          imageSrc={this.state.lightboxImageSrc} />
      );
    } else {
      return null;
    }
  }

  onShowLightbox(imageSrc) {
    this.setState({
      showLightbox: true,
      lightboxImageSrc: imageSrc
    });
  }

  onHideLightbox() {
    this.setState({
      showLightbox: false,
      lightboxImageSrc: null
    });
  }
}

export default App;
