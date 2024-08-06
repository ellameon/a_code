import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql', // Использование относительного пути
  cache: new InMemoryCache()
});

export default client;