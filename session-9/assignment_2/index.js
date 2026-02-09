var arr = [1, 2, 3, 4, 5];
function sum(arr) {
    var sum = 0;
    arr.forEach(function (i) {
        sum += i;
    });
    return sum;
}
console.log(sum(arr));
// Question 2
function another(a, b) {
    if (a + b > 100) {
        return "Sum is greate than 100";
    }
    return a + b;
}
console.log(another(10, 102));
// 
