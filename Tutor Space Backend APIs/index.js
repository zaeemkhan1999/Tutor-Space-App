const express = require('express');
const { router } = require('./routes/routes');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const cors = require('cors');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('project', 'postgres', 'ZeeKay@1999', {
  host: 'localhost',
  port:5432,
  dialect: 'postgres',
});

const app = express();

app.use(cors());

app.use(express.json());

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  store: new MemoryStore({
    checkPeriod: 86400000 // prune expired entries every 24h
  })
}));

// Use the router object to set up your routes
app.use('/', router);

// Sync the database and start listening on a port
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
});
