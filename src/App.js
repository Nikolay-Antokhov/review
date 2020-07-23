import React from 'react';
import Auth from './containers/Auth';
import Content from './containers/Content';

function App() {
  return (
    <div id="app">
      <Auth>
        <Content />
      </Auth>
    </div>
  );
}

export default App;
