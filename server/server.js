const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()
const routes = require('./routes');

const PORT = 4000 || process.env.PORT
const db = mongoose.connection
const dbPassword = process.env.DB_PASSWORD
const uri = `mongodb+srv://codyjcodes:${dbPassword}@cluster0-o0duq.mongodb.net/test?retryWrites=true&w=majority`
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('short'))
app.use(routes)

const connectToDB = () => {
	db.on('error', console.error.bind(console, 'connection error:'))
	db.once('open', () => console.log(`connected to 🛢`))

	const options = {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	}

	mongoose.connect(uri, options)
}

app.listen(PORT, () => {
	connectToDB()
	console.log(`Backend server running on port ${PORT} 🚀`)
})
