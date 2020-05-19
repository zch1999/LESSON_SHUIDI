import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import { Card } from 'antd'
import TodoList from './components/TodoList'
import ApolloClient from  'apollo-boost'
import { ApolloProvider } from 'react-apollo'


const client = new ApolloClient({
  uri:'http://localhost:3001/graphql'
})
function App() {
  return (
    <ApolloProvider client={client}>
      <Card style={{width: "600px", margin: "100px auto"}}>
        <h1>Graphql demo</h1>
        <TodoList />
      </Card>
    </ApolloProvider>
  );
}

export default App;
