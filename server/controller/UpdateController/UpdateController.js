const { connectToDB, closeConnection } = require("../../modal/db");
const ObjectId = require("mongodb").ObjectID;

const UpdateController = async (req, res) => {
  try {
    const { client, db } = await connectToDB();
    const { players } = req.body;
    const data = players.map((player) => ObjectId(player._id));
    const updateData = await db
      .collection("player")
      .updateMany(
        {
            _id: {
              $in: data,
            },
          },
          { $mul: { price:  2 } },
      )

    console.log(updateData, data);
    closeConnection(client);
    res.json({
      status: 200,
      updateData,
      // searchedResult,
      // count,
    });
  } catch (error) {
    res.status(404).send({ message: error });
  }
};

module.exports = { UpdateController };
