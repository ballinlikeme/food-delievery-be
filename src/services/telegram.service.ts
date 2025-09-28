import TelegramBot from "node-telegram-bot-api";
import { settings } from "../../config/settings";

export class TelegramService {
    private readonly bot: TelegramBot;

    constructor() {
        this.bot = new TelegramBot(settings.BOT_TOKEN, { polling: true });

        console.log("Telegram service is live");
    }

    public async init() {}

    public async sendRequestNotification(
        items: { id: number; name: string; description: string }[],
    ) {
        const chatId = 1215090528;
        // const chatId = 1215090528;
        this.bot.sendMessage(
            chatId,
            "Запросик на покушать от твоего любимого:\n" +
                items
                    .map((i, idx) => `${idx + 1}. ${i.name} - ${i.description}`)
                    .join("\n"),
        );
    }
}

export const telegramService = new TelegramService();
