import React from 'react';

class Entry extends React.Component {
  render() {
    return (
      <div className="entry-text">
        <span>{this.props.entry.date}</span><br/>
        <span>{this.props.entry.content}</span>
      </div>
    );
  }
}

export default Entry;
