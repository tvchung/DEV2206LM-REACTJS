// mảng trong javascript
var arr=[10,15,25,20,30];
console.log(arr);


var oldArr=[1,2,3];
var newArr = [oldArr,4,5];
console.log(oldArr);
console.log(newArr);
// newArr.forEach(element => {
//     console.log(element);
// });
newArr = [...oldArr,4,5];
console.log(newArr);
newArr.forEach(element => {
    console.log(element);
});