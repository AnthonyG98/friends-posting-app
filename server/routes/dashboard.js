const express = require("express");
const router = express.Router();
const { Dashboard } = require("../models");

router.post("/", async (req, res) => {
    const { username, post, profile_picture } = req.body;
    const userPosts = Dashboard.create({
        username: username.payload,
        post: post.payload,
        profile_picture: profile_picture.payload
    })
    res.json("Post successful");
  });

module.exports = router;