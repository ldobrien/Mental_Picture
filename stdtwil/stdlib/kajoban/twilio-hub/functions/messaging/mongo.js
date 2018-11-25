const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://western:Pass4now!@cluster0-otjkb.mongodb.net/test?retryWrites=true';

// Database Name
const dbName = 'western';
const client = new MongoClient(url);

function getData(date)
{
// Use connect method to connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
  
    findDocument(db,date,function() {
      client.close();
    });
  });
}

const findDocument = function(db, date, callback) {
    // Get the documents collection
    const collection = db.collection('hack');
    // Find some documents
    collection.find({date: date}).toArray((err, docs) => {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs);
    });
  }


function insertData(data)
{
// Use connect method to connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
  
    insertDocuments(db,data,function() {
      client.close();
    });
  });
}

const insertDocuments = function(db, data,callback) {
    // Get the documents collection
    const collection = db.collection('hack');
    let obj = JSON.parse(data);
    // Insert some documents
    collection.insertOne({obj}, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      assert.equal(1, result.ops.length);
      console.log("Inserted 1 document into the collection");
      callback(result);
    });
}

let current = new Date().toLocaleString(undefined, {
	day: 'numeric',
	month: 'numeric',
	year: 'numeric'
});
let a =JSON.stringify(current);

//insertData(`{"date": ${a}, "diet":5, "exercise":6, "sleep":12, "mood":4}`);
getData("2018-11-24");