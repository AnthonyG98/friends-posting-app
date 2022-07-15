const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Users } = require("../models");

router.post("/", async (req, res) => {
  const { fullName, username, password, profile_picture } = req.body;
  const createdUser = bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      fullName: fullName.payload,
      username: username.payload,
      password: hash,
    //   profile_picture: profile_picture,
    });
  });
  res.json(username);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username.payload } });
  if (!user) {
    res.json({ error: "user does not exist" });
  } else {
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({ error: "Wrong username or password" });
      } else {
        res.json(user);
      }
    });
  }
});
router.get("/:username", async(req, res)=>{
  const user = req.params.username;
  const returnedUser = await Users.findOne({where:{
    username: user
  }});
  res.json(returnedUser)
});
module.exports = router;