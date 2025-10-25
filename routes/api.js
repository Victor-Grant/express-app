const router = require("express").Router();
const Movie = require("../database/Models");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    console.error("Error fetching movies: ", error);
  }
};

const createMovie = async (req, res) => {
  try {
    const result = await Movie.insertOne(req.body);
    console.log("Movie created: ", result);
    res.json(result);
  } catch (error) {
    console.error("Error creating movie: ", error);
  }
};

const updateMovie = async (req, res) => {
  const result = await Movie.updateOne({ _id: req.params.id }, req.body);
  console.log(req.params.id);
  console.log(result);
  res.json(result);
};

const deleteMovie = (req, res) => {
  console.log("deleting user");
  console.log(req.params.id);
};

router.get("/", getMovies);
router.post("/", createMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
