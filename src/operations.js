const users = [
  { id: 1, name: 'John Armless', age: 15, gender: 'M' },
  { id: 2, name: 'Mary Christmas', age: 20, gender: 'F' },
  { id: 3, name: 'Edward Scissor', age: 18, gender: 'M' },
  { id: 4, name: 'Jessie James', age: 40, gender: 'F' },
  { id: 5, name: 'Paul Rabbit', age: 33, gender: 'M' },
  { id: 6, name: 'John not Green', age: 31, gender: 'M' }
];

function getUser({ id }) {
  return users.find(u => u.id == id);
}

function getUsers({ gender }) {
  return gender ? users.filter(u => u.gender == gender) : users;
}

function updateUser({ id, name, age, gender }) {
  users.map(u => {
    if (u.id == id) {
      u.name = name;
      u.age = age;
      u.gender = gender;
    }
    return u;
  });

  return users.find(u => u.id === id);
}

module.exports = { getUser, getUsers, updateUser };
