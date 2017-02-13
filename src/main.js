import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './styles/index.scss';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('app-container')
  );
});
