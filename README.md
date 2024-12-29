# Incorrect Usage of $inc operator in MongoDB
This repository demonstrates a common error when using the `$inc` operator in MongoDB. The `$inc` operator is used to increment or decrement a numeric field by a specified value.  However, when used incorrectly, it can lead to unexpected behavior, particularly when dealing with fields that have an initial value of 0.

## The Bug
The bug lies in the direct decrementing of a field with an initial value of 0 using `$inc`.  MongoDB will not throw an error, but instead, the field will be updated to -1, which might be undesirable in many applications. The expected behavior would be either to handle the case where the counter is 0 or leave the counter at 0. 

## The Solution
The solution uses a conditional update statement to check if the counter is greater than 0 before decrementing.  This prevents unexpected negative values.