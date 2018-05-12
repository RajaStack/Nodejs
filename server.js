var express = require("express");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ecom");
var app = express();
var port = 4000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


var Product = require("./models/product").Product;
var StatusResponse = require("./util/response").StatusResponse;
var StatusModel = require("./util/response").StatusModel;


 
app.get("/products", (req, res) => {
    Product.find({}, (err, result)=>{
        let count = result.filter((single)=>{ return single.cart }).length;
        StatusResponse.response = result;
        StatusResponse.count = count ? count : 0;
        res.send(StatusResponse);
    });    
});



app.post("/cart", (req, res) => {
    let id = req.body.id;
    let type = req.body.type;
    let query = {"cart" : 1}
    if(type == 2)
      query.cart = 0;
    Product.findOneAndUpdate({"_id" : id}, query, {new : true}, (err, result)=>{
        if(err)
        {
            StatusModel.status = false;
            StatusModel.message = "Update Failed";
            res.send(StatusModel); 
        }
        else
        {
            Product.find({"cart" : 1}).count().exec((err, result)=>{
                StatusModel.status = true;
                StatusModel.message = "Updated Successfully";
                StatusModel.extra = result;
                res.send(StatusModel);
            });              
        }        
    }); 
});



 
app.listen(port, () => {
    console.log("Server listening on port " + port);
});