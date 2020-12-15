const express = require('express');
const router = express.Router();
const Hero = require("../model/Hero");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
});

module.exports = router;
