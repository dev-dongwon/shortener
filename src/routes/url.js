const express = require("express");
const router = express.Router();
const urlController = require('../controller/url-controller');
const urlGenerator = require('../middlewares/url-generator');

router.post('/', urlGenerator, urlController.postUrl);

module.exports = router;