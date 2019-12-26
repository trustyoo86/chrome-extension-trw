import * as React from 'react';
import ReactDOM from 'react-dom';

// main
import Main from './Main';

declare const document: any;

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);