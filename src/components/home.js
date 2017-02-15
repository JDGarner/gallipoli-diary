import React from 'react';
require('smoothscroll-polyfill').polyfill();

class Home extends React.Component {

  scrollDown() {
    window.scroll({ top: window.innerHeight, left: 0, behavior: 'smooth' });
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
