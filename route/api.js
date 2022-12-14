__path = process.cwd()

const express = require('express');
const route = express.Router();
const danzz = require('@danzzcoding/api');

// Route
route.get('/ytaudio', async (req, res, next) => {
	var url = req.query.url
	
	if (!url) return res.json({ error_msg: 'Enter Parameter Url' })
	danzz.sosmed.ytaudio(url)
	.then(data => {
		var result = data;
		res.json({
			data
		})
	})
})

module.exports = route