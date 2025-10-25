const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  ratings: { type: Number, required: true, min: 0, max: 10 },
  genre: { type: [String], required: true },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
