import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Square from './square';
import * as serviceWorker from './serviceWorker';

const Blocks = [
  <Square blockColor="blue" textColor="white" message="white on blue" />,
  <Square blockColor="red" textColor="blue" message="blue on red" />,
  <Square blockColor="pink" textColor="green" message="green on pink" />
];

ReactDOM.render(Blocks, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
