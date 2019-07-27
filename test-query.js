const select = require('./query');

const result = select(['id', 'name'])
  .from('users')
  .where('id', 1);

console.log(result);
