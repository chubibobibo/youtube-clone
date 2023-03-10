import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'


//this line of code accesses the root(which is a div) in our index.html file
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);


