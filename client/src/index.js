import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:3306/graphql'
});

ReactDOM.render(<ApolloProvider client={client}>
  <App />
</ApolloProvider>, document.getElementById('root'));
