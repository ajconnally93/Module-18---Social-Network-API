// should hopefully be easiest model to create - have done this a few times now

const { Schema, model } = require("mongoose");


// console.log("TEST 1");

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
    },



    // references Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

  },



//   no auto-ID
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);




// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Initialize User model
const User = model("User", userSchema);


// exports for index file
module.exports = User;