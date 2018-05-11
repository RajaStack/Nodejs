var Mongoose=require("mongoose"),
	Schema=Mongoose.Schema;

//schema for product
var product = new Schema({
	title : {type:String, required:true, index: true},
	price : {type: Number, required:true },
	image : {type:String, required:true },
	cart : {type: Number, required:true, default : 0 },
	updated_at: { type: Date, default: Date.now },
	created_at: { type: Date, default: Date.now }
}, {
		toObject: {
		  	virtuals: true
		},
  		toJSON: {
  			virtuals: true 
  		}
});

var Product = Mongoose.model("product", product);

module.exports = {
	Product: Product
};



