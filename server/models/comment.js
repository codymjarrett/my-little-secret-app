const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
	
	comment: {
		type: String,
		required: true,
	},
	date: { type: Date, default: Date.now },
	secret: { type: Schema.Types.ObjectId, ref: 'Secret' }
})

const Comment = mongoose.model('Comments', schema)

module.exports = Comment