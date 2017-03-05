import React from 'react';

class TextSection extends React.Component {

  render() {
    return (
      <div className="text-section">
        { this.props.text.map((line, i) => {
            return (
              <span key={i}>{line}</span>
            );
          }) }
      </div>
    );
  }
}

export default TextSection;
