import config from "config";

export const settings = {
    BOT_TOKEN: config.get<string>("BOT_TOKEN"),
};
