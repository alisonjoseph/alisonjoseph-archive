console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import Counter from './Counter';

 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
