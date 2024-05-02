import { Context } from "telegraf";

export interface SessionData {
    courceLike: boolean;
}

export interface IBotContext extends Context {
    session: SessionData;
}
