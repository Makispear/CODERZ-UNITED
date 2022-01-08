// import express.js -----------------------
const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// import the database ---------------------
const db = require('./config/connection')

// import auth ----------
// const { authMiddleware } = require('./utils/auth');

// import GraphQl --------------------------
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./graphql');
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ""
  });

  await server.start();
  server.applyMiddleware({ app });

  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer()


db.once('open', () => {
  app.listen(PORT, () => console.log(`API server running on port ${PORT}!`));
});
