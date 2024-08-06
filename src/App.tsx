import React from 'react';
import './App.scss';
import { ApolloProvider } from "@apollo/client";
import client from "./transport/Client";
import { AuthComponent } from "./view";

function App() {



  return (
    <ApolloProvider client={client}>
      <div>
        <AuthComponent />
      </div>
    </ApolloProvider>
  );
}

export default App;
