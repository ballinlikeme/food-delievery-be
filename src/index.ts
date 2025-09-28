import express from "express";
import { router } from "./routes";
import { telegramService } from "./services/telegram.service";
import cors from "cors";

const app = express();

telegramService.init();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use(router);

app.listen(3000, () => {
    console.log("Server is live");
});
