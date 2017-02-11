import React from 'react';

class Entry extends React.Component {
  render() {
    return (
      <div>
        <span>Date: {this.props.entry.date}</span><br/>
        <span>Entry: {this.props.entry.content}</span>
      </div>
    );
  }
}

export default Entry;
