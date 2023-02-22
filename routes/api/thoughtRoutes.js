// requires express
const router = require("express").Router();

// imported from controllers
const {
    createThought,
    deleteThought,
    getSingleThought,
    updateThought,
    createThoughtReaction,
    deleteReaction,
    getThoughts,
} = require("../../controllers/thoughtController");


// landing page
router.route("/").get(getThoughts).post(createThought);



// thought by ID
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// reaction associated with thought by ID
router
  .route("/:thoughtId/reactions")
  .post(createThoughtReaction)
  .delete(deleteReaction);



// router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);
// router.route("/:thoughtId/reactions").post(createThoughtReaction).delete(deleteReaction);




// console.log("TEST HERE TOO (probably won't work)");

// exports router
module.exports = router;