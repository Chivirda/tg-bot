import { Markup, Telegraf } from "telegraf";
import { IBotContext } from "../context/context.interface";
import { Command } from "./command.class";

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
    }
    handle(): void {
        this.bot.start(ctx => {
            console.log(ctx.session);
            ctx.reply("Вам понравился курс?", Markup.inlineKeyboard([
                Markup.button.callback("Да", "like"),
                Markup.button.callback("Нет", "dislike"),
            ]));
        });

        this.bot.action("like", ctx => {
            ctx.session.courceLike = true;
            ctx.editMessageText("Круто!");
        })

        this.bot.action("dislike", ctx => {
            ctx.session.courceLike = false;
            ctx.editMessageText("Не круто!");
        })
    }
}
