# pandell Assignment
This can be run in the console with node pandellTest.js

This is a function that generates a list of 10,000 numbers in random order each time it is run. Each number in the list is unique and is between 1 and 10,000 (inclusive). (Although I offered a second option which does the same thing but with N numbers)

Complexity - O(n)

If you want a rundown,

1) Holder array is created with numbers 1->10,000, indexes 0->9,999
2) Results array is created
3) Results array is pushed with the holder.splice, with a random index chosen each time as a function of the holder length -1 (to account for index holder.length-1)
4) Return result

Second function is better IMO as this is a more general function, but its more than you asked for.

Thanks!

Adrian Chin# pandellAssignment
