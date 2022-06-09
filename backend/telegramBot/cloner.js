const TelegramBot = require("node-telegram-bot-api");
const { Create, createZipArchive, createZipArchiveTour, createZipArchiveBlog } = require("./Create");
let date = new Date()




// replace the value below with the Telegram token you receive from @BotFather
const token = "5279180278:AAH4YY_SW3HznpAYXu-fU4nCyyZlEKH6ZOg";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});
bot.on("polling_error", console.log);

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  date = new Date()

  createZipArchiveTour();
  createZipArchiveBlog()
  Create();
  setTimeout(() => {
    bot.sendDocument(
      chatId,
      `${__dirname}/../../exports/${date.getDate()}${date.getMonth()}${date.getFullYear()}.json`,
    );
    bot.sendDocument(
      chatId,
      `${__dirname}/../../exports/images-${date.getDate()}${date.getMonth()}${date.getFullYear()}.zip`
    );
    bot.sendDocument(
      chatId,
      `${__dirname}/../../exports/blogs-${date.getDate()}${date.getMonth()}${date.getFullYear()}.zip`
    );
      
    }, [2000]);
  bot.sendMessage(chatId, `Your message is : ${msg.text}`);
  setInterval(() => {
    date = new Date()
    Create();
    setTimeout(() => {
      bot.sendDocument(
        chatId,
        `${__dirname}/../../exports/${date.getDate()}${date.getMonth()}${date.getFullYear()}.json`
      );
      bot.sendDocument(
        chatId,
        `${__dirname}/../../exports/images-${date.getDate()}${date.getMonth()}${date.getFullYear()}.zip`
      );
      bot.sendDocument(
        chatId,
        `${__dirname}/../../exports/blogs-${date.getDate()}${date.getMonth()}${date.getFullYear()}.zip`
      );
    }, [2000]);
  }, [86400000]);
});
