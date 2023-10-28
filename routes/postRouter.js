const express = require('express');
const router = express();
const {getPosts, createPost, getPost, updatePost, deletePost} = require('../controllers/postController')

router.route("/").get(getPosts);

router.route('/').post(createPost);

router.route('/:id').get(getPost);

router.route('/:id').put(updatePost);


router.route('/:id').delete(deletePost);


// Another ways to write the same functionallity

// router.get("/", getPosts);
// router.route("/").get(getPosts);



module.exports = router;