const Url = require("../models/Url");
const { hostUrl } = require("../config");

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
  },

  redirectUrl: async (req, res) => {
    const shortUrl = req.params.shortUrl;

    try {
      const existUrl = await Url.findOne({
        where: { shortUrl: shortUrl }
      });

      if (existUrl) {
        return res.status(301).redirect(`${hostUrl}/${shortUrl}`);
      }

      return res.status(400).json({ msg: "요청 주소가 존재하지 않습니다" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }
};

module.exports = controller;
