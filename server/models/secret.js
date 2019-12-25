const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
	secret: String,
	comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
})

const Secret = mongoose.model('Secret', schema)

module.exports = Secret
