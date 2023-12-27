const express = require("express");
const app = express();
const port = process.env.PORT || 3500;

app.get("/api", (req, res) => {
    res.send({ message: "Hello from Express!" });
});

app.post("/api", (req, res)=>{});
app.patch("/api", (req, res)=>{});

app.listen(port, () => console.log(`Listening on port ${port}`));