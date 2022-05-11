const TelegramBot = require("node-telegram-bot-api");
const date = new Date();

const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");
const dbName = "handmade";
const client = new MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

function getDocuments(db, callback) {
  const query = {}; // this is your query criteria
  db.collection("tours")
    .find(query)
    .toArray(function (err, result) {
      if (err) throw err;
      callback(result);
    });
}

function Create(name) {
  client.connect((err) => {
    //assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    getDocuments(db, function (docs) {
      console.log("Closing connection.");
      client.close();

      // Write to file
      try {
        fs.writeFileSync(
          `${__dirname}/../../exports/${date.getDate()}${date.getMonth()}${date.getFullYear()}.json`,
          JSON.stringify(docs)
        );
        console.log("Done writing to file.");
      } catch (err) {
        console.log("Error writing to file", err);
      }
    });
  });
}


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

  Create(msg.text);
  setTimeout(() => {
    bot.sendDocument(
      chatId,
      `${__dirname}/../../exports/${date.getDate()}${date.getMonth()}${date.getFullYear()}.json`
    );
  }, [2000]);
  bot.sendMessage(chatId, `Your message is : ${msg.text}`);
  setInterval(() => {
    Create(msg.text);
    setTimeout(() => {
      bot.sendDocument(
        chatId,
        `${__dirname}/../../exports/${date.getDate()}${date.getMonth()}${date.getFullYear()}.json`
      );
    }, [2000]);
  }, [86400000]);
});
