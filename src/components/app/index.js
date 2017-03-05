import React from 'react';
import EntryList from '../entry-list';
import Home from '../home';
import Intro from '../intro';
import PostScript from '../postscript';
import Lightbox from '../lightbox';
import config from '../../config';
import Spinner from 'react-spinkit';
import Request from 'superagent';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      entriesLoaded: false,
      showLightbox: false,
      lightboxImageSrc: null
    };
  }

  componentDidMount() {
    var url = config.diaryApiHost + '/entries';

    Request.get(url).end((err, response) => {
      if (err) {
        console.log('There was an error fetching from API', err);
      } else if (response) {
        this.setState({
          entries: response.body,
          entriesLoaded: true
        });
      }
    });
  }

  render() {
    return (
      <div className="app">
        <Home />
        <div className="app-content">
          <Intro showLightbox={this.onShowLightbox.bind(this)} />
          {
            this.state.entriesLoaded ?
            this.renderAppBody() :
            this.renderLoadingSpinner()
          }
          { this.renderLightbox() }
        </div>
      </div>
    );
  }

  renderAppBody() {
    return (
      <div className="app-body">
        <EntryList
          entries={this.state.entries}
          showLightbox={this.onShowLightbox.bind(this)} />
        <PostScript showLightbox={this.onShowLightbox.bind(this)} />
      </div>
    );
  }

  renderLoadingSpinner() {
    return (
      <div className="loading">
        <Spinner spinnerName='circle' />
        <span>Loading diary entries...</span>
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
