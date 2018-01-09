# graphql-getting-started

# Getting started with graphql

To execute, simply run `npm run server` and then go to http://localhost:3000/graphql

Some queries to be executed:

```
query getSingleUser($userID:Int!) {
    user(id: $userID) {
        name
        age
        gender
    }
}

query getTwoUsers($user1ID:Int!, $user2ID:Int!) {
    user1: user(id: $user1ID) {
        ...userFields
    }
    user2: user(id: $user2ID) {
        ...userFields
    }
}

query getUsers($gender: String, $hideAge: Boolean!, $showId: Boolean!){
  users(gender: $gender){
    ...userFields
  }
}

mutation updateUser($id:Int!, $name:String!, $age:Int!, $gender:String!){
  updateUser(id: $id, name: $name, age: $age, gender: $gender){
    ...userFields
  }
}

fragment userFields on Person{
  id
  name
  age
  gender
}
```
