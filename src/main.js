import React from 'react';
import ReactDOM from 'react-dom';
import EntryContainer from './entry-container';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(EntryContainer),
    document.getElementById('app')
  );
});
