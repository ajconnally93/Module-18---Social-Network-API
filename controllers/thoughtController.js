
// imported from models
const { User, Thought } = require("../models");

module.exports = {

  // GET ALL thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => console.error(err));
  },

  // GET thought by ID
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })


    // terniary operator used
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found." })
          : res.json(thought)
      )

      .catch((err) => console.error(err));
  },


// 
// 


  createThought(req, res) {

    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },

        //   pushes into array
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })

      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Error. No user found with that ID.",
            })
          : res.json("Thought created.")
      )

      .catch((err) => {
        console.error(err);
      });
  },



  // update thought by ID via PUT route
  updateThought(req, res) {

    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )

      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "Error. No thought found by this ID." })
          : res.json(thought)
      )

      .catch((err) => console.error(err));
  },



  // remove thought by ID via DELETE route
  deleteThought(req, res) {

    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "Error. No thought found by this ID." })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { runValidators: true, new: true }
            )
      )

      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "Error. User not found." })
          : res.json({ message: "Thought deleted." })
      )

      .catch((err) => console.error(err));
  },
 


// console.log("maybe test here???? 1");




//   uses POST route
  createThoughtReaction(req, res) {

    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      
      .then((thought) =>
        !thought
          ? res.status(404).json({
              message: "No thought found by this ID.",
            })
          : res.json({ message: "Reaction created." })
      )

      .catch((err) => console.error(err));
  },



  // delete routes
  deleteReaction(req, res) {

    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.body.reactionId } } },
      { runValidators: true, new: true }
    )

    // terniary operator usage
      .then((thought) =>
        !thought
          ? res.status(404).json({
              message: "No thought found by this ID.",
            })
          : res.json({ message: "Reaction deleted." })
      )

      .catch((err) => {
        console.error(err);
      });
  },
};