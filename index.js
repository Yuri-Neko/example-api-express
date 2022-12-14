const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
cors = require('cors'),
secure = require('ssl-express-www');

// Port
const setport = require('./setport')
const port = `${setport}`

// Route
const main = require('./route/index'),
api = require('./route/api')

// App
app.use(favicon(path.join('assets','img','favicon.png')))
app.set('trust proxy', true);
app.set('json spaces',2)
app.use(cors())
app.use(secure)
app.use(cookieParser());
app.use(express.static("assets"))
app.use('/', main)
app.use('/api', api)

app.listen(port, () => {
  console.log(`Server running on, http://localhost:${port}`)
})

module.exports = app