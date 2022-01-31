const express = require("express");
const app = express();
const eventRoutes = require("./apis/events/routes")
const connectDb = require("./db/database");

app.use(express.json())
app.use("/api/events", eventRoutes)

connectDb();
app.listen(8001)