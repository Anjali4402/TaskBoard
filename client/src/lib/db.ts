const { username, password } = process.env;

export const connectionStr =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.c4ya5hi.mongodb.net/taskBoard?appName=Cluster0";
