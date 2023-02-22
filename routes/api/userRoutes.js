const router = require("express").Router();


// imported from controller
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");


// routers with get, put, post routes

// landing page
router.route("/").get(getUsers).post(createUser);
// user by ID
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
// friends by id
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);



module.exports = router;