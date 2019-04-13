import { configure } from '@storybook/react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

function loadStories() {
  const req = require.context('../src/stories', true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);