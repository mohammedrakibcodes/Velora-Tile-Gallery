import dns from "dns";
import { MongoClient } from "mongodb";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

export default client;
