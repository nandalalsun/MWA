const router = require("express").Router();
const gameController = require("../controller/gameController");


router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next();
  });

router.route("/games").get(gameController.allGames);

router.route("/games/:gameId").get(gameController.oneGame).delete(gameController.deleteOne);

module.exports = router;
