import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";

//configure env
dotenv.config();

//rest object
const app = express();

//PORT
const PORT = process.env.PORT || 8001;

//middleware
app.use(express.json());
app.use(cors());

//rest api
app.get("/", (req, res) => {
  res.send("Welcome to the Shopzy");
});

app.listen(PORT, () => {
  console.log(
    `Server is running ${process.env.DEV_MODE} mode on port: ${PORT}`.bgCyan
      .white
  );
});
