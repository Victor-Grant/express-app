const router = require("express").Router();

const getUsers = (req, res) => {
  console.log("Fetching users");
};

const createUser = (req, res) => {
  console.log("creating user");
  console.log(req.body);
};

const updateUser = (req, res) => {
  console.log("updating user");
  console.log(req.params.id);
  console.log(req.body);
};

const deleteUser = (req, res) => {
  console.log("deleting user");
  console.log(req.params.id);
};

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
