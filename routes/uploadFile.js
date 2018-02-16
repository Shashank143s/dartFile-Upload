var express = require('express');
var router = express.Router();
var multer = require('multer');
//Check for diskStorage Permissions
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ dest: 'uploads/' } );
/* GET home page. */
router.post('/',upload.single('file') , function(req, res, next) {
  console.log('Entering POST request ');
  console.log(req.file);
  res.json({data : "success"});
});

module.exports = router;
