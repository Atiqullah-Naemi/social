const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 8081

app.use(cors())
app.use(bodyParser.json())

// if no rout found
app.use((req, res, next) => {
	let err = new Error('Not Found')

	err.status = 404

	next(err)
})

// start express server
app.listen(PORT, () => {
	console.log('Server running on port ${PORT}')
})