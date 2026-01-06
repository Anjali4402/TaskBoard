const DB_USERNAME = process.env.MONGODB_USERNAME;
const DB_PASSWORD = process.env.MONGODB_PASSWORD;

if (!DB_USERNAME || !DB_PASSWORD) {
  throw new Error("Missing MongoDB environment variables");
}

export const connectionStr = `mongodb+srv://${encodeURIComponent(
  DB_USERNAME,
)}:${encodeURIComponent(
  DB_PASSWORD,
)}@cluster0.c4ya5hi.mongodb.net/taskBoard?appName=Cluster0`;
