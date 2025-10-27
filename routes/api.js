const router = require("express").Router();
const Movie = require("../database/Models");
const { ObjectId } = require("mongoose");

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
  // if (!ObjectId.isValid("68fefb1769addd54348a1da7")) {
  //   throw new Error("The Id you passed is not a valid object Id type");
  // } else {
  //   console.log("perfect object Id");
  // }
  console.log(req.params.id);
  const result = await Movie.findByIdAndUpdate(req.params.id, req.body);
  console.log(req.params.id);
  console.log(result);
  res.json(result);
};

/* 
{
  "_id": {
    "$oid": "68fefb1769addd54348a1da7"
  },
  "title": "Duplicate",
  "director": "Victor Grant",
  "releaseYear": 2025,
  "ratings": 7.2,
  "genre": [
    "Action, Thriller"
  ],
  "__v": 0
}
*/

const deleteMovie = async (req, res) => {
  const result = await Movie.findByIdAndDelete(req.params.id);
  console.log("deleting user");
  console.log(req.params.id);
  res.json(result);
};

router.get("/", getMovies);
router.post("/", createMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
