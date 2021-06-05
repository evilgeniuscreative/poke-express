// set up the requirements ie express
const express = require('express')
const app = express()
const PORT = 8000

// set up the listener
app.listen(PORT, () => {
    console.log('Connected to the Porke Express on ')
})