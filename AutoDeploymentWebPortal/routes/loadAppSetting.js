var express = require('express');
var router = express.Router();
var appConfig = require('../config/appConfig')

/* GET users listing. */
router.get('/getAllEnviroment', function(req, res, next) {
 var enviroment = appConfig["enviroments"]
 res.send({
   status: res.statusCode,
   requested_url: req.url,
   data: enviroment
 })
});
router.get('/getEnviromentPathByName/:name', function(req, res, next) {
  var enviromentName = req.params.name;
  var avilablePath = appConfig[enviromentName]
  res.send({
    status: res.statusCode,
    requested_url: req.url,
    data: avilablePath
  })
 });

module.exports = router;