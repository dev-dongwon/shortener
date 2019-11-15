const express = require("express");
const router = express.Router();
const urlController = require('../controller/url-controller');
const urlGenerator = require('../middlewares/url-generator');
const urlDupleChecker = require('../middlewares/url-duple-checker');

router.post('/register.json', urlDupleChecker, urlGenerator, urlController.postUrl);
router.get('/:shortUrl', urlController.redirectUrl)

module.exports = router;