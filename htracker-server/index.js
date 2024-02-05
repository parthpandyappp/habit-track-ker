// index.js

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Define your GraphQL schema
const schema = buildSchema(`
   type Query {
      hello: String
   }
`);

// Define resolvers
const root = {
  hello: () => "Hello, GraphQL World!",
};

// Create an Express app
const app = express();

// Setup GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL for easy testing
  })
);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/graphql`);
});
