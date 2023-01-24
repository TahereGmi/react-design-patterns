const express = require('express')

const app = express()

app.use(express.json())

let currentUser = {
    id:'987',
    name: 'Jane',
    age: '32',
    hairColor: 'black',
    hobbies: ['swimming', 'party']
}


let users = [{
    id: '123',
    name: 'Sara',
    age: '29',
    hairColor: 'brown',
    hobbies: ['sport', 'theater']
  },
  {
    id: '987',
    name: 'Jane',
    age: '32',
    hairColor: 'black',
    hobbies: ['swimming', 'party']
  },
  {
    id: '768',
    name: 'Jak',
    age: '38',
    hairColor: 'blond',
    hobbies: [, 'books']
  }]

  const products = [{
    id: '1234',
    name: 'Tv',
    price: '200$',
    description: 'LED Screen, a great sale',
    rating: 4.5
  },
  {
    id: '3456',
    name: 'Runnig shoes',
    price: '100$',
    description: 'Amazing running experience!',
    rating: 4.2
  },
  {
    id: '3234',
    name: 'Own',
    price: '60$',
    description: 'Cooking problems finished! Be your own chef!',
    rating: 3.8
  }]

  app.get('/current-user', (req, res) => {
    res.json(currentUser)
  })

  app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.json(users.find(user => user.id === id))
  })


  app.get('/users', (req, res) => {
    res.json(users)
  })

  app.get('/products/:id', (req, res) => {
    const { id } = req.params

    res.json(products.find(product => product.id === id))
  })

  app.get('/products', (req, res) => {
    res.json(products)
  })

  app.listen(8080, () => {
    console.log('Server is listening on port 8080!')
  })