const router = require("express").Router();


// imported from controller
const {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    addFriend,
    deleteUser,
    removeFriend,
} = require("../../controllers/userController");


// routers with get, put, post routes

// landing page will get all users
router.route("/").get(getUsers).post(createUser);
// user by ID
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
// friends by id
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);



module.exports = router;