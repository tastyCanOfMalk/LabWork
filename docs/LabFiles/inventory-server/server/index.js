var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var dao = require("./data_access");

var app = express();

app.use(bodyParser.json()); //Parse JSON body
app.use(cors()) //Enable CORS

//Add vehicle
app.post("/vehicle", function(req, res) {
  res.header('Content-Type', 'application/json');

  if (req.body === undefined) {
    res.statusCode = 500;
    res.end();

    return;
  }

  dao.addVehicle(req.body);
  res.send({});
});

//update vehicle
app.put("/vehicle/:vin", function(req, res) {
  res.header('Content-Type', 'application/json');

  if (req.params.vin === undefined || req.body === undefined) {
    res.statusCode = 500;
    res.end();

    return;
  }

  dao.updateVehicle(req.params.vin, req.body);
  res.send({});
});

// delete vehicle
app.delete("/vehicle/:vin", function(req, res) {
  dao.deleteVehicle(req.params.vin);
  res.header('Content-Type', 'application/json');  
  res.send({});
});


// all vehicles
app.get("/vehicle", function(req, res) {
  var list = dao.getInventory();
  res.send(list);
});

console.log("Service endpoint base: http://localhost:3000/vehicle");

app.listen(3000);