// when passing string 'google', it gets the GoogleStrategy info because there's
// a internal identifer.
const passport = require('passport');
module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile','email']
    })
  );

  // Direct user to the google login page
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) =>{
    req.logout();
    //res.send(req.user);
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });


};
