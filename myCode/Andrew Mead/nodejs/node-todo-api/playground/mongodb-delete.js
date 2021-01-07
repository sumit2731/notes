const { MongoClient, ObjectID } = require("mongodb");

const url =
  "mongodb://sumeet:sood@localhost:27017/?authMechanism=SCRAM-SHA-1&authSource=TodoApp";

const dbName = "TodoApp";

MongoClient.connect(
  url,
  function(err, client) {
    if (err) {
      console.log("Error in connection");
    } else {
      console.log("Connected successfully to server");
      const db = client.db(dbName);
    //   db.collection('Todos').deleteMany({text: 'Have Sex'}).then(result => {
    //       console.log(result);
    //   });
    db.collection('Todos').findOneAndDelete({text: 'walk the dog'}).then(result => {
        console.log(result);
    });
      // client.close();
    }
  }
);
