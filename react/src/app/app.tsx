// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import styles from './app.module.scss';
import Hello from './hello';


export function App() {
  return (
    // React.createElement('div', { className: 'App' }, 'Hello')
    <div className="App">
      <Hello />
    </div>
  );
}

export default App;
