import React from 'react';
import './App.scss';
import { ApolloProvider } from "@apollo/client";
import client from "./transport/Client";
import { Router } from './view/router/Router';

function App() {
  
  return (
    <ApolloProvider client={client}>
      <div>
        <Router/>
      </div>
    </ApolloProvider>
  );
}

export default App;
