// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import styles from './app.module.scss';
import Hello from './hello';


export function App() {
  return (
    // React.createElement('div', { className: 'App' }, 'Hello')
    <div className="App">
      <Hello name="Romain" age={38} isActive />
      {/* React.createElement(Hello, { name: 'Romain' }) */}
    </div>
  );
}

export default App;
