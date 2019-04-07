function pageCount(n, p) {
let front
    let back
    let result
//front

front = Math.floor(p/2)

//back
back =( Math.floor(n/2)- Math.floor(p/2))

result = Math.min(front,back)
return result

}
console.log(pageCount(6,5))


//Explanation

/* 
(0) It helps to realize that the journey from page A to B has the same number of page turns as the journey from page B to A. since each action (turning a page) can only be reversed one way (turning the page the other direction).

(1) with a book of n pages, going from page 1 to page n requires n/2 page turns. This is true whether n is even or odd, we are taking the floor of n/2

(2) likewise, number of page turns to go from page 1 to page p? p/2

(3) imagaine you are reading a book, and paused at page P, now to finish the book, how many more turns do you need? that's (1) - (2), which is n/2 - p/2

(4) consider (0). (3) is also the # of page turns to get to page p if you started from the back of the book.

From all of the above:

p/2 represents the number of turns from the front of the book n/2 - p/2 is the number of page turns if you start from the back of the book

Taking the min of the two makes sense since those are the only two ways for her to get to page P.
*/