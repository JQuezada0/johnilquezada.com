var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(express.static('/home/ec2-user/App/html'));


app.listen(3000);