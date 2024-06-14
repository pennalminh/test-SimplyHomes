import express from "express";
import bodyParser from "body-parser";
import router from "./src/routers/index";
import dotenv from "dotenv";
import allowCrossDomain from "./src/middlewares/allowCrossDomain";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: "5mb" }));

app.use(allowCrossDomain);

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
