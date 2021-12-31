function alwaysHungry(arr) {
    for (var i=0; i<arr.length; i++){
        if (arr[i] == "food") {
            console.log("yummy");
        }
        else if (i == arr.length - 1){
            console.log("I'm Hungry")
        }  
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i=0; i<arr.length; i++){
        if (arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        var sum = sum + arr[i];
    }
    var sum = sum/arr.length;
    var count = 0;
    for (var i=0; i<arr.length; i++){
        if (arr[i] > sum) {
            count += 1
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

function reverse(arr) {
    var x = [];
    for (var i=4;i>-1;i--){
        x.push(arr[i]);
    }
    var arr = x
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    valueA = 0;
    valueB = 1;
    sum = 0;
    while (valueB < n - 1){
        var sum = fibArr[valueA] + fibArr[valueB];
        fibArr.push(sum);
        valueB++;
        valueA++;
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



