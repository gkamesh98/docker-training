const { MongoClient } = require("mongodb");

const clientURI = "mongodb://mongo-server-check:27017";
const databaseName = "mongoCheck";

const server = async (clientURI, databaseName) => {
  console.log(clientURI, databaseName);
  const mongoClient = new MongoClient(clientURI);

  try {
    await mongoClient.connect(() => {
      const database = mongoClient.db(databaseName);

      database
        .collection("check_collection")
        .find()
        .stream()
        .on("data", function (doc) {
          console.log(doc);
        });
    });
  } catch (e) {
    console.error(e);
  }
};

server(clientURI, databaseName);
