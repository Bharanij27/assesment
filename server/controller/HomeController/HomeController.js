const { connectToDB, closeConnection } = require("../../modal/db");
const url = require("url");

const HomeController = async (req, res) => {
  try {
    const { client, db } = await connectToDB();
    const parseResult = url.parse(req.url, true).query;
    const { pageIndex = 0, search = "" } = parseResult;
    const existing = await db
      .collection("player")
      .find({ name: new RegExp(search, "i") })
      .skip(Number.parseInt(pageIndex) * 5)
      .limit(5);
    const count = await existing.count();
    const searchedResult = await existing.toArray();
    closeConnection(client);
    res.json({
      status: 200,
      searchedResult,
      count,
    });
  } catch (error) {
    res.status(404).send({ message: "Something went wrong" });
  }
};

module.exports = { HomeController };
