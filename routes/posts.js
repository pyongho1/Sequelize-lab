const router = require("express").Router();
const postsCtrl = require("../controllers/posts.js");

router.get("/", postsCtrl.index);
router.get("/:id", postsCtrl.show);
router.post("/", postsCtrl.create);
router.post("/:id/comments", postsCtrl.addComment);
router.put("/:id", postsCtrl.update);
router.delete("/:id", postsCtrl.delete);

module.exports = router;
