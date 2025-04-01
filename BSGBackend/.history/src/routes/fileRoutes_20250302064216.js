const express = require("express");
const multer = require("multer");
const File = require("../models/File");

const router = express.Router();
const upload = multer({ dest: "src/uploads/" });

router.post("/upload", upload.single("pdf"), async (req, res) => {
  const file = await File.create({
    userId: req.body.userId,
    filePath: req.file.path,
  });

  res.json({ message: "File uploaded", file });
});

module.exports = router;
