const router = require('express').Router()
const secretController = require('../../controllers/secretController')

router
	.route('/')
	.get(secretController.getAllSecrets)
	.post(secretController.postASecret)

router
	.route('/:id')
	.get(secretController.getASecretById)
	.put(secretController.updateASecret)
	.delete(secretController.deleteASecret)

router
.route('/:id/comments')
.get(secretController.getAllCommentsForThisSecret)



module.exports = router
