const { Comment } = require('../models')
const { Secret } = require('../models')

module.exports = {
	getAllComments: async (req, res) => {
		try {
			const allComments = await Comment.find()
			res.status(200).json({
				success: true,
				count: allComments.length,
				data: allComments,
			})
		} catch (err) {
			res.status(500).json({
				success: false,
				message: err,
			})
		}
	},
	postAComment: async (req, res) => {
		const { body } = req
		const { secretId } = req.params

		if (body) {
			try {
				const newComment = await Comment.create(body)
				const addCommentToSecret = await Secret.findByIdAndUpdate(
					secretId,
					{ $push: { comments: newComment._id } },
					{ new: true }
				)
				res.status(201).json({
					success: true,
					data: addCommentToSecret,
				})
			} catch (err) {
				res.status(500).json({
					error: err,
				})
			}
		}
	},
	getACommentById: async (req, res) => {
		const id = req.params.id
		if (id) {
			try {
				const comment = await Comment.findById(id)
				res.status(200).json({
					success: true,
					data: comment,
				})
			} catch (err) {
				res.status(500).json({
					success: false,
					message: err,
				})
			}
		}
	},
	updateAComment: async (req, res) => {},
	deleteAComment: async (req, res) => {},
}
