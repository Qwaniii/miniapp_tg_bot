const TelegramBot = require('node-telegram-bot-api');

const token = "6506700251:AAGm2HZXC2JGT7uvjqc9v64oxg3VoRDCGOc"
const webAppUrl = "https://inspiring-muffin-da127f.netlify.app"

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {

      await bot.sendMessage(chatId, "Переходи к гороскопу", {
        reply_markup: {
            keyboard: [
                [{text: "Заполнить форму"}]
            ]
        }
      });
  }

});