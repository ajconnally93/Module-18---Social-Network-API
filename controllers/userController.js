const { User, Thought } = require("../models");

module.exports = {
  
  getUsers(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => console.error(err));

  },

  

//   by ID
  getSingleUser(req, res) {

    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .populate("thoughts")
      
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )

      .catch((err) => {
        console.error(err);
      });
  },


  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => console.error(err));
  },

  // Update user by ID with a PUT route
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )


    // use of terniary operator
      .then((user) =>
        !user
          ? res.status(404).json({ message: "Error. No user found." })
          : res.json(user)
      )

      .catch((err) => console.error(err));
  },

  // Deletes user and all associated content (by id)
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })

      .then((user) =>
        !user
          ? res.status(404).json({ message: "User not found." })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )

      .then(() => res.json({ message: "User deleted." }))
      .catch((err) => console.error(err));
  },


//   console.log("consider adding a test here");

  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )

      .then((user) =>
        !user
          ? res.status(404).json({ message: "User not found." })
          : res.json({ message: "Friend added!" })
      )

      .catch((err) => {
        console.error(err);
      });
  },



  // delete route to remove friend from friends list
  removeFriend(req, res) {

    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )

      .then((user) =>
        !user
          ? res.status(404).json({ message: "User not found." })
          : res.json({
              message: "User removed from friends list.",
            })
      )

      .catch((err) => {
        console.error(err);
      });
  },
};