import express from "express";
import path from "path";
import morgan from "morgan";

import { checkDir, createDir } from "./utils/helpers";
import routes from "./routes/routes";

const app = express();
const port = 3001;

app.use("/api", routes);
app.use(morgan("combined"));

app.listen(port, (): void => {
  const thumbFolderPath = path.join(__dirname, "../public/images/thumbnail");
  // check if the thumbnail folder exists and if not create it
  if (checkDir(thumbFolderPath) === false) {
    createDir(thumbFolderPath);
  }
  console.log(`Server is up on port ${port}`);
});

export default app;
