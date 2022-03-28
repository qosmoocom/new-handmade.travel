const mongoose = require('mongoose');
//const dbUri = "mongodb+srv://anvar:1DRLK4PrhRd9FcRd@cluster0.uoe1t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const dbUri =mkd;
 const dbUri = "mongodb://localhost:27017/handmade";

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
