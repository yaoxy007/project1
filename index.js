const express = require('express')
const fs = require('fs');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
})

app.get('/contact-me', (req, res) => {
  res.sendFile(__dirname + '/contact-me.html');
})

app.use((req, res) => {
  res.status(400).sendFile(__dirname + '/404.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})