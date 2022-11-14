import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { clients } from '../mocksClients';
console.log(clients)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App clients={clients} />
);
