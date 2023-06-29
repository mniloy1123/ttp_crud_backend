const router = require("express").Router();

//Already mounted on /api/
router.use('/campuses', require('./campuses'))
router.use('/students', require('./students'))

//404 handling
router.use((req, res, next) => {
    const error = new Error("404 Not Found")
    error.status = 404;
    next(error);
})

module.exports = router;