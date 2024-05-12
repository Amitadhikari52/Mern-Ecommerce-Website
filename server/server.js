const express = require('express');
const cors = require('cors');

//rest object
const app = express();

//PORT
const PORT = 8001;

//middleware
app.use(express.json());
app.use(cors());

//rest api
app.get("/",(req,res) => {
  res.send("Welcome to the Shopzy")
})

app.listen((PORT), () => {
  console.log(`Server is running on port: ${PORT}`);
})