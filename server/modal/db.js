const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const url = process.env.mongodbURL || "mongodb://localhost:27017/";

const connectToDB = async () => {
  try {
    const client = await mongoClient.connect(url);
    const db = client.db("zenClass");
    return { client, db };
  } catch (error) {
    console.log(error);
  }
};

const closeConnection = (client) => client.close();

module.exports = { connectToDB, closeConnection };
