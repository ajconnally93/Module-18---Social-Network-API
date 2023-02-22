// basic middleware for API


const router = require('express').Router();
const apiRouter = require('./api');
router.use('/api', apiRouter);
router.use((req, res) => {
  return res.send('Error! Incorrect route.');
});
module.exports = router;