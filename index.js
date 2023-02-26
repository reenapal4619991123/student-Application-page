var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('Signup', { title: 'signup' });
});

router.get("/signin", function (req, res, next) {
  res.render("signin", { title: "signin" });
});

/* POST signup page. */
router.post("/signupuser", function (req, res, next) {
  res.json(req.body);
});


/* POST signin page. */
router.post("/signinuser", function (req, res, next) {
  res.json(req.body);
});

module.exports = router;
