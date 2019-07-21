const json = {
  users: [
    {
      'id': 1,
      'name': 'TK',
      'age': 26,
      'email': 'leandrotk100@gmail.com'
    },
    {
      'id': 2,
      'name': 'Kazumi',
      'age': 30,
      'email': 'kazumi@gmail.com'
    },
    {
      'id': 3,
      'name': 'Kaio',
      'age': 11,
      'email': 'kaio@gmail.com'
    },
    {
      'id': 4,
      'name': 'Dani',
      'age': 25,
      'email': 'dani@gmail.com'
    }
  ]
};

const where = (attributes, json) => (attribute, value) =>
  json
    .users
    .filter(user => user[attribute] === value)
    .map(user => ({ [attributes[0]]: user[attributes[0]], [attributes[1]]: user[attributes[1]] }));

const from = (attributes) => (json) => ({ where: where(attributes, json) });

const select = (attributes) => ({ from: from(attributes) })

const result = select(['id', 'name'])
  .from(json)
  .where('id', 1);

console.log(result);
