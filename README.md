# SQL Query JSON

Experiment SQL-query in JavaScript for JSON

You have this JSON:

```javascript
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
      'age': 30,
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
```

And you want this interface (like a SQL query):

```javascript
select(['id', 'name'])
  .from('users')
  .where('id', 1);
```

An the result should be:

```javascript
[{ id: 1, name: 'TK' }]
```
