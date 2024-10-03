import express from 'express'
import dotenv from 'dotenv'
import createError from 'http-errors'
import initDB from './initDB.js'
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Initialize DB
initDB()

import ProductRoute from './Routes/Product.route.js'
app.use('/products', ProductRoute)

//404 handler and pass to error handler
app.use((req, res, next) => {
  /*
  const err = new Error('Not found');
  err.status = 404;
  next(err);
  */
  // You can use the above code if your not using the http-errors module
  next(createError(404, 'Not found'))
})

//Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  })
})

const PORT = process.env.PORT || 6001

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})



// This is for creating with express, after installing it in our CL
// const { MongoClient, ServerApiVersion } = require('mongodb');

// import { MongoClient, ServerApiVersion } from "mongodb"
// import mongoose from "mongoose"
// import express from "express"
// import ProductsRoute from "./Routes/Products.route.js"
// const port = 3000

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// This is the shorter version of connecting to mongoDB

// const uri = "mongodb+srv://Praise:VV6mnxIpVgMIsDxU@praise.bj6j8.mongodb.net/products-api";

// The catch is to catch error because it is an asynchronize function

// main().catch((err) => console.log(err))

// async function main() {
//   await mongoose.connect(uri)
//   console.log('You successfully connected to MongoDB')

// }
//Request parameter
// app.all('/test/:id', (req, res) => {
//   res.send(req.params)
// })

//Query String
// app.all('/test', (req, res) =>{
//   console.log(req.query)
//   res.send(req.query)
// })

//Request body
// app.all('/test', (req, res) => {
//   console.log(req.body)
//   res.send(req.body)
  
// })



// This is the longer version of connecting to MongoDB

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


// app.use('/products', ProductsRoute)

// app.get('/', (req, res) => {
//     res.send("<h1> Youre on the home route</h1>")
//     console.log(req.url);
//     console.log(req.method);
// })
// app.listen(port, () => {
//     console.log("app is now running on port 3000")
    
// })