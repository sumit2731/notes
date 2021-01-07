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
            // db.collection('Todos').findOneAndUpdate(
            //     { _id: new ObjectID('5b33da6cab14bdec01cd820c')},
            //     {$set: {completed: false}},
            //     {returnOriginal: false}
            //     ).then(result => console.log(result));
            db.collection('Users').findOneAndUpdate(
                { _id: new ObjectID('5b312584bd89642f6ca677a2')},
                {$set: {name: 'sumit'}, $inc: {age: 5}},
                {returnOriginal: false}
            ).then(result => console.log(result));
        }
    }
);




