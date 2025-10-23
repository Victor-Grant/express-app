const router = require("express").Router();

const getUsers = (req, res) => {
  console.log("Fetching users");
};

const createUser = (req, res) => {
  console.log("creating user");
};

const updateUser = (req, res) => {
  console.log("updating user");
};

const deleteUser = (req, res) => {
  console.log("deleting user");
};

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
