const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://kalicharan:<password>@cluster0.fdtwwn4.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_restaurants');
    const restaurants = database.collection('restaurants');

    // Query for a movie that has the title 'Back to the Future'
    const query = {name : "Domino'S Pizza"};
    const restaurant = await restaurants.findOne(query);

    console.log(restaurant);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

