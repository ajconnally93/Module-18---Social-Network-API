// requires Reaction model/schema and will be used in this model

const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(

  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },


    // default date functionality from JS don't need helpers for it
    createdAt: {
      type: Date,
      default: Date.now,
    },

    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },




//   sends to json - can be used in Insomnia
// virtuals
  {
    toJSON: {
        getters: true,
        virtuals: true,
    },
    id: false,
  },
);


// virtuals
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});



const Thought = model("Thought", thoughtSchema);

// exports to be used
module.exports = Thought;