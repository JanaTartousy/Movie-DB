const mongoose = require("mongoose");
const uri =
  "mongodb+srv://janatartousy:mongojanaes6@cluster0.j3nma9d.mongodb.net/potato?retryWrites=true&w=majority";

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log("Database connection failed");
      console.error(error);
      process.exit(1);
    });
};
