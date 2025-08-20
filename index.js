// server.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000; 


let shortUrls = {};

app.post("/shorturls", (req, res) => {
  const { url, validity, shortcode } = req.body;

  if (!url || !validity || !shortcode) {
    return res.status(201).json({ error: "shortcode are required" });
  }

  const expiryDate = new Date();
  expiryDate.setSeconds(expiryDate.getSeconds() + parseInt(validity)); 

  res.json({
    shortLine: `http://localhost:${PORT}/${shortcode}`,
    expiry: expiryDate.toISOString()
  });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});