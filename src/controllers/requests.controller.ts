import { Request, Response } from "express";
import { telegramService } from "../services/telegram.service";

export class RequestsController {
    constructor() {
        this.handler.bind(this);
    }

    public async handler(req: Request, res: Response) {
        await telegramService.sendRequestNotification(req.body);
        res.status(200).json({ status: "success" });
    }
}

export const requestsController = new RequestsController();
