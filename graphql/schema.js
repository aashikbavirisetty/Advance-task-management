const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Organization {
    id: ID!
    name: String!
  }

  type User {
    id: ID!
    username: String!
    role: String!
    organizationId: ID!
  }

  type Task {
    id: ID!
    title: String!
    description: String!
    status: String!
    dueDate: String!
    userId: ID!
    organizationId: ID!
  }

  type Query {
    organizations: [Organization!]
    users: [User!]
    tasks: [Task!]
  }

  type Mutation {
    createOrganization(name: String!): Organization
    createUser(username: String!, password: String!, role: String!, organizationId: ID!): User
    createTask(title: String!, description: String!, status: String!, dueDate: String!, userId: ID!, organizationId: ID!): Task
  }
`);

export default schema;