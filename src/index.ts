import express from "express";
import { sampleRouter } from "./routes/sample.router";

const app = express();

app.use("/samplePath", sampleRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
