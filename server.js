const express = require("express");
const app = express();
const apiRoutes = require("./routes/api");
const connectDB = require("./database/db");

connectDB();
app.use(express.json());
require("dotenv").config();

app.use("/api/movies", apiRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
