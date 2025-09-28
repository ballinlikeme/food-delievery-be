import express from "express";
import { telegramService } from "./services/telegram.service";
import { router } from "./routes";

const bootstrap = async () => {
    const app = express();

    app.use(router);

    app.listen(3000, () => {
        telegramService.init();
        console.log("Server is live");
    });
};

bootstrap();
