const Url = require("../models/Url");
const { hostUrl } = require('../config');

const controller = {
  postUrl: async (req, res) => {
    const urlObj = req.body;

    try {
      const insertedUrl = await Url.create({
        ...urlObj
      });

      return res.status(201).json({
        url: `${hostUrl}/${urlObj.shortUrl}`
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }
};

module.exports = controller;
