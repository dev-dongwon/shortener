const express = require("express");
const router = express.Router();
const urlController = require('../controller/url-controller');
const urlGenerator = require('../middlewares/url-generator');
const urlDupleChecker = require('../middlewares/url-duple-checker');

// origin url 체크 후 없으면 short url 생성, 있으면 short url 내려줌 
router.post('/register.json', urlDupleChecker, urlGenerator, urlController.postUrl);
// short url 입력 시 origin Url로 리다이렉트
router.get('/:shortUrl', urlController.redirectUrl)
// url 조회 로그 보기
router.get('/:shortUrl/stats', urlController.getStats);

module.exports = router;