const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');
const { getUser, getUsers, updateUser } = require('./operations');

const root = {
  user: getUser,
  users: getUsers,
  updateUser: updateUser
};

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(3000, () => console.log('Running on localhost:3000'));

/**
 * Queries:
 *
 * https://scotch.io/tutorials/a-practical-graphql-getting-started-guide-with-nodejs
 */
// query getSingleUser($userID:Int!) {
//       user(id: $userID) {
//           name
//           age
//           gender
//       }
//   }

// query getTwoUsers($user1ID:Int!, $user2ID:Int!) {
//     user1: user(id: $user1ID) {
//         name
//         age
//         gender
//     }
//     user2: user(id: $user2ID) {
//         name
//         age
//         gender
//     }
// }
