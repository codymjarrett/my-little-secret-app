const router = require("express").Router();
const commentController = require('../../controllers/commentController')


router
    .route('/')
        .get(commentController.getAllComments)
        

router
    .route('/:id')
        .get(commentController.getACommentById)
        .put(commentController.updateAComment)
        .delete(commentController.deleteAComment)

/* api/comments/:id/secrets/:secretId */
router
    .route('/secret/:secretId')
        .post(commentController.postAComment)




module.exports = router;
