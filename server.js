const express = require('express');
const app = express();





//--------------  Import CSS &/or JSON ----------------//
app.use(express.static('public'));

console.log('dirname', __dirname);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





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

const pokemonRouter = require('./routers/pokemon.js');

app.use('/p', pokemonRouter);

startServer();