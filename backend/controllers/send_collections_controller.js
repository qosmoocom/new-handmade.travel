var token = "5344484261:AAFDeDr2vt6G3P1KuGg7ntWfaKB4c484HSI";

const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo(.+)/, (msg, match) => {
  // The 'msg' is the received Message from Telegram
  // and 'match' is the result of executing the regexp
  // above on the text content of the message

  const chatId = msg.chat.id;

  // The captured "whatever"
  const resp = match[1];

  // Reply to the Bot
  bot.sendMessage(chatId, "Your Document is");

  // Sending the document
  bot.sendDocument(chatId, "document.pdf");
});
