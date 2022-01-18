// import express.js -----------------------
const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const { authMiddleware } = require('./utils/auth');

const path = require('path')

// import the database ---------------------
const db = require('./config/connection')

// import auth ----------

// import GraphQl --------------------------
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./graphql');
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });

  await server.start();
  server.applyMiddleware({ app });

  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer()

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


db.once('open', () => {
  app.listen(PORT, () => console.log(`API server running on port ${PORT}!`));
});
