const { Post, Comment } = require("../models");

const create = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const show = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const index = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: Comment, as: "comments" }],
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

const update = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    post.set(req.body);
    await post.save();

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    await post.destroy();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const addComment = async (req, res) => {
  try {
    req.body.postId = req.params.id;
    const comment = await Comment.create(req.body);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  create,
  show,
  index,
  update,
  delete: deletePost,
  addComment,
};
