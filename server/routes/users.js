const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Users } = require("../models");

router.post("/", async (req, res) => {
  const { fullName, username, password, profile_picture } = req.body;
  const createdUser = bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      fullName: fullName,
      username: username,
      password: hash,
    //   profile_picture: profile_picture,
    });
  });
  res.json(username);
});
module.exports = router;