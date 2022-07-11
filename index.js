const express = require('express')
const app = express()
const port = 3000
const db = require('./dbConnect.js');
const routes = require('./routes/index.js');
const protectedRoutes = require('./routes/protectedRoutes.js');
const {checkToken} = require('./middleware/checkToken.js');


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

db.connectDb();

app.use(express.json());

app.use('/', routes);

app.use(checkToken)

app.use('/protected', protectedRoutes);