const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        user(id: Int!): Person
        users(gender: String): [Person]
    }

    type Person {
        id: Int
        name: String
        age: Int
        gender: String
    }

    type Mutation {
      updateUser(id: Int!, name: String!, age: Int!, gender: String!): Person
    }
`);

module.exports = schema;
