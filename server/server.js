import { app } from "./app.js";

// Port
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running at port `, PORT);
});
