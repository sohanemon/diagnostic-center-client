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

## To align something with margin (mx-auto, ml-auto, mr-auto)

- set them as block element

```js
      <Button className='bg-blue-900 ml-auto block' type='submit'>
```

## Promise based toast/react-hot-toast

- syntax

```js
toast.promise(promise, {
  /*configs*/
});
```

- example

```js
const promise = client.post("/service", data);
toast.promise(promise, {
  loading: "loading",
  success: "added successfully",
  error: "something went wrong",
});
```

- and also further `.then` can be added

```js
toast
  .promise(client.post("/service", data), {
    // ...
  })
  .then(() => {
    e.target.reset();
    navigate("/");
  });
```
