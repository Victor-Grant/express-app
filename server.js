const app = require("express")();
const apiRoutes = require("./routes/api");
require("dotenv").config();

app.use("/api/users", apiRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
