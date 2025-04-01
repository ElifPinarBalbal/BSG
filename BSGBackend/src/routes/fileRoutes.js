const express = require("express");
const multer = require("multer");
const File = require("../models/File");

const router = express.Router();

// Multer Storage Config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/uploads/"); // Ensure folder exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // Unique file name
    }
});

const upload = multer({ storage });

// Upload Endpoint
router.post("/upload", upload.single("pdf"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        if (!req.body.userId) {
            return res.status(400).json({ error: "User ID is required" });
        }

        // Save file in DB
        const file = await File.create({
            userId: req.body.userId,
            filePath: req.file.path,
        });

        res.json({ message: "File uploaded successfully", file });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
