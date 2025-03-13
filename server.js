const express = require("express");
const QRCode = require("qrcode");
const app = express();

app.use(express.json());

app.post("/generate", async (req, res) => {
    const { text } = req.body;
    try {
        const qrImage = await QRCode.toDataURL(text);
        res.json({ qrImage });
    } catch (error) {
        res.status(500).json({ error: "Failed to generate QR code" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
