var express = require('express');
var router = express.Router();
const cache = require("../cache");

router.get('/', async function(req, res, next) {
  let rssItems = cache.get("rssItems")
  let config = cache.get("config")

  res.render('index', { rssItems: rssItems, config: config });
});

module.exports = router;
