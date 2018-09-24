const express = require('express')
// const session = require('express-session')
const passportSetup = require('./config/passport-setup')
const authRoutes = require('./routes/auth-routes')

const app = new express()

app.set('view engine', 'ejs')

// app.use(session)

app.use('/auth', authRoutes)

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3000, () => {
  console.log('app now listening on the port 3000')
})
