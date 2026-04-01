const express = require("express");
const app = express();

app.get("/health", (req, res) => {
    res.json({ status: "ok good !", timestamp: new Date() });
});

app.get("/api/activities", (req, res) => {
    res.json([]);
});

app.get("/api/activities/special", (req, res) => {
    res.json('hellooooooooooooo world hi');
});

app.listen(3000, () => console.log("VitalSync API on :3000"));