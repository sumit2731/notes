const { MongoClient, ObjectID } = require("mongodb");

const url =
    "mongodb://sumeet:sood@localhost:27017/?authMechanism=SCRAM-SHA-1&authSource=TodoApp";

const dbName = "TodoApp";

MongoClient.connect(
    url,
    function (err, client) {
        if (err) {
            console.log("Error in connection");
        } else {
            console.log("Connected successfully to server");
            const db = client.db(dbName);
            // db.collection('Todos').find({ _id: new ObjectID('5b33da6cab14bdec01cd820c')}).toArray().then(docs => {
            //     console.log(docs);
            // }, err => {
            //     console.log('Unable to ftech todos', err);
            // });
            db.collection('Todos').find().count().then(count => {
                console.log(`Todos Count ${count}`);
            }, err => {
                console.log('Unable to ftech todos', err);
            });
            // client.close();
        }
    }
);







