// const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if (err) {
//         console.log('connection was not made');
//     } else {
//         console.log('Connection Made');
//     }
// });

// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");
let obj = new ObjectID();

const url =
  "mongodb://sumeet:sood@localhost:27017/?authMechanism=SCRAM-SHA-1&authSource=TodoApp";

// const url = "mongodb://localhost:27017";




const dbName = "TodoApp";

MongoClient.connect(
  url,
  function(err, client) {
    if (err) {
      console.log("Error in connection");
    } else {
      console.log("Connected successfully to server");
      const db = client.db(dbName);
    //   db.collection("Todos").insertOne(
    //     { text: "Something to do", completed: false },
    //     (err, result) => {
    //       if (err) {
    //         console.log("Unable to insert", err);
    //       } else {
    //         console.log(result.ops);
    //       }
    //     }
    //   );
    db.collection('Users').insertOne({
        name: 'Nitesh',
        age: 26,
        location: 'Kolkata'
        }, (err, result) => {
            if (err) {
                return console.log('Unable to insert user', err);
            }
          console.log(result.ops[0]._id.getTimestamp());
          // console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
        });
    client.close();
    }
  }
);
