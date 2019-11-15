const Url = require("../models/Url");
const { hostUrl } = require("../config");
const Logger = require("../mongoDB/models/Logger");

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

  // mongoDB에 로그 기록 생성
  registLog: async shortUrl => {
    const log = new Logger({
      shortUrl
    });

    await log.save();
  },

  redirectUrl: async (req, res) => {
    const shortUrl = req.params.shortUrl;

    try {
      // 로그 생성
      controller.registLog(shortUrl);

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
  },


  // 미완성입니다.
  // aggregate 하여 시간 대별로 카운트를 세서 그룹화해 반환하려고 했습니다.
  getStats: async (req, res) => {
    const shortUrl = req.params.shortUrl;
    try {
      const Stats = await Logger.aggregate([
        {
          $match: {
            shortUrl: { shortUrl }
          }
        },
        {
          $group: {
            count: { $sum: 1 }
          }
        }
      ]);
      return res.stats(200).json({ Stats });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
    
  }
};

module.exports = controller;
