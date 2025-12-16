const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("🚀 CI/CD Pipeline working via Jenkins on WSL2!, webhook test");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
