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

/*
select(attributes)
  - attributes: Array of strings

from(node)
  - node: string

where(attribute, attributeValue)
  - attribute: string
  - attributeValue: number
*/

const startEngine = (json) => (attributes) => ({ from: from(json, attributes) });

const byAttributeValue = (attribute, value) => (node) => node[attribute] === value;

const buildAttributes = (node) => (acc, attribute) => ({ ...acc, [attribute]: node[attribute] });

const selectAttributes = (attributes) => (node) => attributes.reduce(buildAttributes(node), {});

const where = (json, attributes) => (attribute, value) =>
  json
    .filter(byAttributeValue(attribute, value))
    .map(selectAttributes(attributes));

const from = (json, attributes) => (node) => ({ where: where(json[node], attributes) });

const select = startEngine(json);

select(['id', 'name'])
  .from('users')
  .where('id', 1);

module.exports = select;