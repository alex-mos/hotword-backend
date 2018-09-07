const express = require('express')
const app = new express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3000, () => {
  console.log('app now listening on the port 3000')
})
