import  { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGO_URI as string;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const database = client.db("gc2");

export default  database ;