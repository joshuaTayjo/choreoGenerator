import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!process.env.MONGODB_URI) throw new Error('Please add your Mongo URI to .env.local');


if (!dbName) throw new Error('Define the MONGODB_DB environment variable');

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) return { client: cachedClient, db: cachedDb };

  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  let client = new MongoClient(uri, opts);
  await client.connect();
  const db = client.db(dbName);
  cachedClient = client;
  cachedDb = db;
  return { client, db };
}


// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = await client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options);
//   clientPromise = await client.connect();
// }
//
// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise;