const mongoose = require('mongoose')
const { Secret } = require('../models')
const { Comment } = require('../models')

module.exports = {
	getAllSecrets: async (req, res) => {
		try {
			const allSecrets = await Secret.find()
			res.status(200).json({
				success: true,
				count: allSecrets.length,
				data: allSecrets,
			})
		} catch (err) {
			res.status(500).json({
				success: false,
				message: err,
			})
		}
	},
	postASecret: async (req, res) => {
		const body = req.body
		try {
			const newSecret = await Secret.create(body)
			res.status(201).json({
				success: true,
				data: newSecret,
			})
		} catch (err) {
			res.json(500).json({
				success: false,
				message: err,
			})
		}
	},
	getASecretById: async (req, res) => {
		const secretId = req.params.id
		try {
			const secret = await Secret.findById(secretId)
			res.status(200).json({
				success: true,
				data: secret,
			})
		} catch (err) {
			res.status(500).json({
				success: false,
				message: err,
			})
		}
	},
	updateASecret: async (req, res) => {},
	deleteASecret: async (req, res) => {},
	getAllCommentsForThisSecret: async (req, res) => {
		const secretId = req.params.id
		try {
			const allComments = await Comment.find()
			const thisSecretsComments = allComments.filter(
				comment => comment.secret == secretId
			)
			res.status(200).json({
				success: true,
				count: thisSecretsComments.length,
				data: thisSecretsComments,
			})
		} catch (err) {
			res.status(500).json({
                success: false,
				message: err,
			})
		}
	},
}
