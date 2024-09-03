import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://Lelouchski:Kick%24omebitchies72@together.ajhb3u8.mongodb.net/?retryWrites=true&w=majority&appName=TOGETHER";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  if (!(global as any)._mongoClientPromise) {
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;