

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolver');
// DB connection
mongoose.connect('mongodb://localhost:27017/taskmanagement', { useNewUrlParser: true, useUnifiedTopology: true });

// GraphQL setup
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));


// Start server
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000/graphql');
});


const auth = require('./auth');

app.use(auth);

export default app;