// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import styles from './app.module.scss';
import Hello from './hello';
import Select from './select';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export function App() {
  return (
    // React.createElement('div', { className: 'App' }, 'Hello')
    <div className="App">
      <Hello name="Romain" age={38} isActive />
      {/* React.createElement(Hello, { name: 'Romain' }) */}
      <Select options={options} />
    </div>
  );
}

export default App;
