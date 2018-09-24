const router = require('express').Router()
const passport = require('passport')

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/logout', (req, res) => {

  res.send('logging out')
})

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
//router.get('/google/redirect', (req, res) => {
  res.send('You reached the google callback URI')
})

// Passport routes for express
router.get('/pocket', passport.authenticate('pocket'), (req, res) => {
  // The request will be redirected to Pocket for authentication, so this
  // function will not be called.
});

router.get('/auth/pocket/callback', passport.authenticate('pocket', { failureRedirect: '/login' }), (req, res) => {
  res.send('You reached the pocket callback URI')
});

module.exports = router
