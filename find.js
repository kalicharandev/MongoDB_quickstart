import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://kalicharan:<password>@cluster0.fdtwwn4.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db("sample_restaurants");
    const restaurants = database.collection("restaurants");
    // query for movies that have a runtime less than 15 minutes
    const query = { restaurant_id: "40356018" };
    
    const cursor = restaurants.find(query);
    // print a message if no documents were found
    if ((await cursor.count()) === 0) {
      console.log("No documents founds!");
    }
    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);