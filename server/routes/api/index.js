const router = require("express").Router();
const comments = require("./comments")
const secrets = require("./secrets")

router.use("/comment", comments)
router.use("/secret", secrets)


module.exports = router