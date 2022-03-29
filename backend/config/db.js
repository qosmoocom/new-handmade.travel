const mongoose = require('mongoose');
//const dbUri = "mongodb+srv://anvar:1DRLK4PrhRd9FcRd@cluster0.uoe1t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const dbUri =mkd;
 const dbUri = "mongodb://localhost:27017/handmade";

// mongosh "mongodb+srv://cluster0.uoe1t.mongodb.net/myFirstDatabase" --apiVersion 1 --username anvar
// MTh21o8C3pQN16bV
//mongoexport --uri mongodb+srv://admin:MTh21o8C3pQN16bV@cluster0.uoe1t.mongodb.net/myFirstDatabase --collection users --type json --out users.json

//mongoexport --uri mongodb+srv://admin:MTh21o8C3pQN16bV@cluster0.uoe1t.mongodb.net/myFirstDatabase --collection users --type json --out users.json

// mongoimport users.json -d myFirstDatabase -c users --drop

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbUri, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
