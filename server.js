const express = require('express');
const expressHandlebars = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
const { DATABASE_URL, PORT } = require('./config.js');

//--------------  Import CSS &/or JSON ----------------//

const app = express();

app.use(express.static('public'));

console.log('dirname', __dirname);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//-------------- Handlebars Middleware   ----------------//
//--------------  Construction  ----------------//

const hbs = expressHandlebars.create({
  defaultLayout: null,
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//--------------  Server  ----------------//

const startServer = async () => {
  // connect to DB
  await mongoose.connect(DATABASE_URL);

  mongoose.connection.on('connected', () => {
    console.log('Connected to ' + DATABASE_URL);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  app.on('connected', () => {
    console.log('MongoDB connected on:', DATABASE_URL);
  });
};

//--------------  Routes Middleware  ----------------//

const pokemonRouter = require('./routers/pokemonRouter.js');
const Pokemon = require('../models/Pokemon');

app.use('/', (req, res) => {
  const pokes = Pokemon.find({});
  console.log('pokes', pokes);
  res.render('index', { title: 'Pokemon', pokes });
});

app.use('/pokemon', pokemonRouter);

startServer();
