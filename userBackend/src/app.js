const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World Docker Backend' })
})

app.post('/echo', (req, res) => {
  try {
    const data = req.body
    res.status(200).json(data)
  } catch (error) {
    console.error("ERROR EN POST /echo:", error);
    res.status(500).send({ message: "Error interno en el servidor"})
  }
 })
 
module.exports = app