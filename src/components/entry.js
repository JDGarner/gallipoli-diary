import React from 'react';
import cx from 'classnames';

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.entryClasses = cx("entry-container", {
      "left-entry": this.props.alignLeft,
      "right-entry": !this.props.alignLeft,
    });
  }

  render() {
    let entry = this.props.entry;

    return (
      <div className={this.entryClasses}>
        <div className="entry-date">{entry.date}</div>
        <div className="entry-content">
          <div className="entry-day">{entry.day}</div>
          <span className="entry-text">{entry.content}</span>
        </div>
      </div>
    );
  }
}

export default Entry;
