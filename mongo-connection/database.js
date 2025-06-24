const { MongoClient } = require("mongodb");

const url = "mongodb+srv://surajss3696:Suraj3696@suraj-node-js-learning.hoshxwy.mongodb.net/"

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
    await client.connect();

    console.log("connected successfully to server");

    const db = client.db(dbName);

    const collection = db.collection("User")

    const data = {
        firstName: "Suraj",
        lastName: "Salunkhe",
        age: 29
    }

    const insertResult = await collection.insertOne(data);
    console.log("Inserted Document", insertResult);

    const countDocument = await collection.countDocuments({});

    console.log("count", countDocument);

    const findDoc = await collection.find({ firstName: "Suraj" })
    console.log("find doc", findDoc);
    return "done";
}

main().then(console.log).catch(console.error).finally(() => client.close());