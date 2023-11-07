// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import styles from './app.module.scss';
import Hello from './hello';
import Select from './select';
import UserForm from './user-form';
import { ClockClass, ClockFunction } from './clock';


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
      {/* React.createElement(Hello, { name: 'Romain', age: 38, isActive: true }) */}
      <Select options={options} />
      <UserForm />
      <ClockClass />
      <ClockFunction />
    </div>
  );
}

export default App;
