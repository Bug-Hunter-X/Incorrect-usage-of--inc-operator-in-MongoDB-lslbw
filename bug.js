```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("65354567890")},{$inc:{counter:-1}});
```