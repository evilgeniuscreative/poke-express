// set up the requirements ie express
const express = require('express');
const app = express();

// set up the port
const PORT = process.env.PORT || 3000;

// set up the listener
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
