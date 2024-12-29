```javascript
//Correct usage of $inc operator with conditional check
db.collection('myCollection').updateOne({"_id":ObjectId("65354567890"),"counter":{$gt:0}},{$inc:{counter:-1}});
```