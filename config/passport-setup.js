const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const PocketStrategy = require('passport-pocket')
const keys = require('./keys')

passport.use(
  new GoogleStrategy({
    callbackURL:'/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    // коллбек, исполняемый после аутентификации
    console.log('passport callback function fired')
    console.log(accessToken)
    console.log(refreshToken)
    console.log(profile)
  })
)

passport.use(
  new PocketStrategy({
    consumerKey: keys.pocket.consumerKey,
    callbackURL: '/auth/pocket/redirect'
  }, (username, accessToken, done) => {
    process.nextTick(function () {
      console.log('pocket')
      console.log(username)
      console.log(accessToken)

      // return done(null, {
      //   username: username,
      //   accessToken: accessToken
      // })
    })
  })
)