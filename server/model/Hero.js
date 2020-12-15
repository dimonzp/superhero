const e = require("express");
const { Schema, model, Types } = require("mongoose");

const images = new Schema({
  imageName: { type: String, required: true },
  filepath: { type: String, required: true },
});

const schema = new Schema({
  nickname: { type: String, required: true, unique: true },
  real_name: { type: String, required: true },
  origin_description: String,
  superpowers: String,
  catch_phrase: String,
  images: [{ type: images }],
});

module.exports = model("Hero", schema);
