import React from 'react';
import ReactDOM from 'react-dom';
import EntryContainer from './components/entry-container';
import './css/index.css';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(EntryContainer),
    document.getElementById('app')
  );
});
