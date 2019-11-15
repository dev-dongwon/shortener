const shortId = require("shortid");

const urlGenerator = (req, res, next) => {
  try {
    const urlCode = shortId.generate();
    const originalUrl = req.query.url;

    req.body = {
      originalUrl,
      shortUrl: urlCode
    };

    next();
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = urlGenerator;
