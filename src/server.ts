import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();
import cors from "cors";
import bodyParser from "body-parser";
import { uploadRouter } from "./routes/uploadRoutes";

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));



app.use("/api/v1", uploadRouter);
app.get("/", (req, res) => {
  res.status(200).send({
    message: "ok",
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
