const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const crypto = require("crypto-js");
const fs = require("fs");

// Init Middleware
app.use(express.json({ limit: "50mb", extended: false }));
app.use(cors());

app.get("/download", (req, res) => {
  res.download(path.join(__dirname, "docs/text.txt"), (err) => {
    if (err) {
      return console.log(err);
    }
  });
});

app.post("/encrypt", (req, res) => {
  // Receive data from React Client
  const data = req.body.data;
  const { text, secret } = data;

  // Encrypt data
  const encryptedText = crypto.AES.encrypt(text, secret).toString();

  // Save data in text file
  fs.writeFile("docs/text.txt", encryptedText, (err) => {
    if (err) {
      return res.status(500).json({ msg: "Fail" });
    }
    console.log("The file save");
    return res.status(200).json({ msg: "Success" });
  });
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));
