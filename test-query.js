const json = {
  users: [
    {
      'id': 1,
      'name': 'TK',
      'age': 26,
      'email': 'tk@mail.com'
    },
    {
      'id': 2,
      'name': 'Daniel',
      'age': 25,
      'email': 'dani@mail.com'
    },
    {
      'id': 3,
      'name': 'Kaio',
      'age': 11,
      'email': 'kaio@mail.com'
    }
  ]
};

// 001
console.log('First Approach');

const select = require('./001');

const firstApproachResult = select(['id', 'name'])
  .from('users')
  .where('id', 1);

console.log(firstApproachResult);

// 002
console.log('Second Approach');

const SQL = require('./002');

const sql = new SQL(json);

const secondApproachResult = sql
  .select(['id', 'name'])
  .from('users')
  .where('id', 1)
  .query();

console.log(secondApproachResult);
