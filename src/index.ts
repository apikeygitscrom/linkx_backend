import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database/database";
import { MainRouter } from "./routes/MainRouter";
import { redirectController } from "./controllers/redirect.controller";
import { encrypterRedirect } from "./controllers/encrypterRedirect.controller";
const app = express();
app.use(cors());
app.use(express.json());

connectToDatabase();
app.use("/api", MainRouter);

app.get("/:link", (req, res) => {
  redirectController(req, res);
});

app.listen(3000);
