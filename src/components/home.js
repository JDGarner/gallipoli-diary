import React from 'react';
import Scroll from 'react-scroll';

class Home extends React.Component {

  scrollDown() {
    let scroll = Scroll.animateScroll;
    scroll.scrollTo(window.innerHeight, { duration: 750 });
  }

  render() {
    return (
      <div className="home">
        <h1>A Gallipoli Diary</h1>
        <h2>Private Frederick Goddard</h2>
        <div className="arrow-wrapper" onClick={this.scrollDown}>
          <div className="arrow-down"></div>
        </div>
        <div className="main-image"></div>
      </div>
    );
  }
}

export default Home;
