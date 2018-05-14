# Nodejs

Step1 : Download the Project
#        npm install

#        node server.js

Server will run on http://localhost:4000/ ( MongoDB will be running on 27017 localhost )

Sample Product Collection

```javascript
{
    "_id" : ObjectId("5adec4f71bcf485d6c8c1866"),
    "title" : "LED TV",
    "image" : "https://images-na.ssl-images-amazon.com/images/I/81abDGNBMWL._SX425_.jpg",
    "price" : 1200,
    "cart" : 1,
    "created_at" : ISODate("2018-04-23T06:15:32.107Z")
}
```

Run this query in mongoDB.It will insert some random data.

```javascript
db.product.insertMany(
[
	{
	    "title" : "LED TV",
	    "image" : "https://images-na.ssl-images-amazon.com/images/I/81abDGNBMWL._SX425_.jpg",
	    "price" : 1200,
	    "cart" : 1,
	    "created_at" : ISODate("2018-04-23T06:15:32.107Z")
	},
	{
	    "title" : "LCD TV",
	    "image" : "https://images-na.ssl-images-amazon.com/images/I/81abDGNBMWL._SX425_.jpg",
	    "price" : 1500,
	    "cart" : 0,
	    "created_at" : ISODate("2018-04-23T06:15:32.107Z")
	},
	{
	    "title" : "LED TV",
	    "image" : "https://images-na.ssl-images-amazon.com/images/I/81abDGNBMWL._SX425_.jpg",
	    "price" : 1200,
	    "cart" : 1,
	    "created_at" : ISODate("2018-04-23T06:15:32.107Z")
	},
	{
	    "title" : "LCD TV",
	    "image" : "https://images-na.ssl-images-amazon.com/images/I/81abDGNBMWL._SX425_.jpg",
	    "price" : 1500,
	    "cart" : 0,
	    "created_at" : ISODate("2018-04-23T06:15:32.107Z")
	},
	{
	    "title" : "LED TV",
	    "image" : "https://images-na.ssl-images-amazon.com/images/I/81abDGNBMWL._SX425_.jpg",
	    "price" : 1200,
	    "cart" : 1,
	    "created_at" : ISODate("2018-04-23T06:15:32.107Z")
	},
	{
	    "title" : "LCD TV",
	    "image" : "https://images-na.ssl-images-amazon.com/images/I/81abDGNBMWL._SX425_.jpg",
	    "price" : 1500,
	    "cart" : 0,
	    "created_at" : ISODate("2018-04-23T06:15:32.107Z")
	},
	{
	    "title" : "LED TV",
	    "image" : "https://images-na.ssl-images-amazon.com/images/I/81abDGNBMWL._SX425_.jpg",
	    "price" : 1200,
	    "cart" : 1,
	    "created_at" : ISODate("2018-04-23T06:15:32.107Z")
	},
	{
	    "title" : "LCD TV",
	    "image" : "https://images-na.ssl-images-amazon.com/images/I/81abDGNBMWL._SX425_.jpg",
	    "price" : 1500,
	    "cart" : 0,
	    "created_at" : ISODate("2018-04-23T06:15:32.107Z")
	}
]
)


```


