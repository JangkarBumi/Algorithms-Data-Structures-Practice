function getMoneySpent(keyboards, drives, s) {
    let max, result
    let arr = [0]

    keyboards.sort(function (a, b) { return a - b })
    drives.sort(function (a, b) { return a - b })

    if ((keyboards[0] + drives[0]) > s) return -1
    else {
        for (let i = 0; i < keyboards.length; i++) {
            for (let j = 0; j < drives.length; j++) {
                max = Math.max(keyboards[i] + drives[j])
                if (max <= s && max > arr[0]) arr.push(max)
            }
        }
    }
    arr.sort(function (a, b) { return b - a })
    return arr[0]
} 

/*
Here is my solution in Java that passes all cases in O(n log(n)) time with O(1) additional space.

Here is how it works: We sort keyboards in descending order. We sort usb in ascending order. Then we iterate over them not checking usbs past where 1 usb plus our current keyboard is already greater than s. Read the comments in my solution for a more in depth explanation.

I think you mis-understood how this piece of the code works

for(int i = 0, j = 0; i < n; i++)
	for(; j < m; j++)
This is a n+m for loop iterator, notice how m is not reset after each loop of n. So I don't check every pairing but rather only the pairings that make logical sense. Also the O(n log(n)) time I state as the upper bound is where n = n+m, but I am guessing you already knew that.

function getMoneySpent(keyboards, drives, s){
    drives.sort((a, b) => a - b);
    keyboards.sort((a, b) => a - b);
    let max = -1;
    for (let d of drives) {
        for (let k of keyboards) {
            if (d + k <= s) {
                max = (d + k > max) ? d + k : max;
            }
        }
    }
    return max;
}
===Editorial===
Create a variable to store the amount of money Monica spends (we'll call it ).
Run two nested loops to check all possible combinations of keyboard and USB drive purchases.
For each possible purchase, , determine if Monica can afford it (i.e.,  is true).
If Monica can afford the purchase, update  to be the maximum of the current value of  and .
The Time Complexity of this approach is . O( n . m)
*/