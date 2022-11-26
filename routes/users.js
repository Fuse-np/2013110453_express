var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hello kitty');
  res.status(200).json(
    {Fullname: 'Nattaphong Patis'})

});

router.get('/bio', function(req, res, next) {
res.status(200).json(
  {Fullname : 'Nattaphong Patis',
   Nickname : 'Fuse',
   Hobby    : 'Play game',
   gitusername : 'Fuse-np'
})
});


module.exports = router;
