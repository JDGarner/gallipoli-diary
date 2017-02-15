import React from 'react';
import cx from 'classnames';

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.entryClasses = cx("entry", {
      "left-entry": this.props.alignLeft,
      "right-entry": !this.props.alignLeft,
    });
  }

  render() {
    return (
      <div className={this.entryClasses} >
        <span>{this.props.entry.content}</span>
      </div>
    );
  }
}

export default Entry;
