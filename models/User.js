// should hopefully be easiest model to create - have done this a few times now

const { Schema, model } = require("mongoose");

const userSchema = new Schema(

  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,

    //   regex
      match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,