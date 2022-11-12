## Get data from Form

```js
const data = ["name", "photoURL", "email", "password"].map(
  (el) => e.target[el].value
); //['sfj','sfa','sfa','dfa']
```

or a better way

```js
let data = {}; // its important
["email", "password"].forEach((el) => (data[el] = e.target[el].value)); // {email: 'efj', password: 'sse'}
```
