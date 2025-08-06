const mongoose = require("mongoose");

async function connectToMongoDB() {
  try {
   await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("Error Connecting MongoDB" + err);
    process.exit(1); //exit with failure
  }
}

module.exports = connectToMongoDB;
