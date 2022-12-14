__path = process.cwd()

const express = require('express');
const route = express.Router();

// Route
route.get('/', (req, res) => {
	res.sendFile(__path + '/index.html')
})

module.exports = route