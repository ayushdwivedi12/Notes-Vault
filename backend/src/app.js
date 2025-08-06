require("dotenv").config();
const notesRoute = require("../src/routes/notesRoute");

const express = require("express");
const connectToMongoDB = require("./config/db");
const rateLimiter = require("./middlewares/ratelimiter");
const app = express();
const PORT = process.env.PORT || 5001;
const cors = require("cors");
const path = require("path");


if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "dist", "index.html"));
  });
}

connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server Started at PORT", PORT);
  });
});
