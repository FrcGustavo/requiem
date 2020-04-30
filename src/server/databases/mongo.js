import { MongoClient } from 'mongodb';
import config from '../config';

const USER = encodeURIComponent(config.db.user);
const PASSWORD = encodeURIComponent(config.db.password);
const DB_NAME = config.db.name;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.db.host}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.dbName = DB_NAME;
  }

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect((err) => {
          if (err) {
            reject(err);
          }

          resolve(this.client.db(this.dbName));
        });
      });
    }

    return MongoLib.connection;
  }

  findAll(collection, query) {
    return this.connect().then((db) => db
      .collection(collection)
      .find({ isPublic: true, isActive: true })
      .limit(query.limit)
      .sort({ _id: -1 })
      .skip(0)
      .toArray());
  }

  findBySlug(collection, slug) {
    return this.connect().then((db) => db
      .collection(collection)
      .findOne({ slug, isPublic: true, isActive: true }));
  }
}

export default MongoLib;
