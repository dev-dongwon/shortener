const express = require("express");
const router = express.Router();
const urlController = require('../controller/url-controller');
const urlGenerator = require('../middlewares/url-generator');
const urlDupleChecker = require('../middlewares/url-duple-checker');

router.post('/', urlDupleChecker, urlGenerator, urlController.postUrl);

module.exports = router;