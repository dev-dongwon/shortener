const Url = require("../models/Url");
const { hostUrl } = require("../config");

const urlDupleChecker = async (req, res, next) => {
  const originUrl = req.query.url;

  try {
    const existUrl = await Url.findOne({
      where: {
        originUrl: originUrl
      }
    });

    // 해당 url이 있으면 url 반환
    if (existUrl) {
      const shortUrl = existUrl.dataValues.shortUrl;
      return res.status(201).json({
        url: `${hostUrl}/${shortUrl}`
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = urlDupleChecker;
