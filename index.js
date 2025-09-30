// server.js
const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// optional: save a sweet message (you can extend)
app.post("/api/save-message", (req, res) => {
  // NOTE: ตัวอย่างเท่านั้น — ยังไม่เชื่อม DB — เก็บเฉพาะในหน่วยความจำถ้าต้องการ
  console.log("Saved message:", req.body);
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
