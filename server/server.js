const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const productsRoutes = require('./api/productsRoutes');
const session = require('express-session');
const usersRoutes = require('./api/usersRoutes');
const ordersRoutes = require('./api/ordersRoutes');
const db = require('./db/database');
const User = require('./db/models/users');

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function(email, password, done) {
      console.log('email', email, 'password', password);
      User.findOne({ where: { email: email } })
        .then(user => {
          if (!user) {
            return done(null, false, {
              message: 'El correo electrónico no existe.',
            });
          }
          if (!user.checkPassword(password)) {
            return done(null, false, {
              message: 'La contraseña es incorrecta.',
            });
          }
          return done(null, user);
        })
        .catch(err => {
          if (err) {
            return done(err);
          }
        });
    },
  ),
);
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => done(err));
});

app.use(session({ secret: 'my secret string' }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', ordersRoutes);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

db
  .sync({ force: false })
  .then(function() {
    app.listen(4000, function() {
      console.log('Server is listening on port 4000!');
    });
  })
  .catch(console.error);
