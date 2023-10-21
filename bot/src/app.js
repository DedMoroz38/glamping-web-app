"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var telegraf_1 = require("telegraf");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var token = process.env.BOT_TOKEN;
var telegram = new telegraf_1.Telegram(token);
var bot = new telegraf_1.Telegraf(token);
var chatId = process.env.CHAT_ID;
bot.start(function (ctx) {
    ctx.reply('Hello ' + ctx.from.first_name + '!');
});
bot.help(function (ctx) {
    ctx.reply('Send /start to receive a greeting');
    ctx.reply('Send /keyboard to receive a message with a keyboard');
    ctx.reply('Send /quit to stop the bot');
});
bot.command('quit', function (ctx) {
    // Explicit usage
    ctx.telegram.leaveChat(ctx.message.chat.id);
    // Context shortcut
    ctx.leaveChat();
});
bot.command('keyboard', function (ctx) {
    ctx.reply('Keyboard', telegraf_1.Markup.inlineKeyboard([
        telegraf_1.Markup.button.callback('First option', 'first'),
        telegraf_1.Markup.button.callback('Second option', 'second'),
    ]));
});
bot.on('text', function (ctx) {
    ctx.reply('You choose the ' +
        (ctx.message.text === 'first' ? 'First' : 'Second') +
        ' Option!');
    if (chatId) {
        telegram.sendMessage(chatId, 'This message was sent without your interaction!');
    }
});
bot.launch();
// Enable graceful stop
process.once('SIGINT', function () { return bot.stop('SIGINT'); });
process.once('SIGTERM', function () { return bot.stop('SIGTERM'); });
