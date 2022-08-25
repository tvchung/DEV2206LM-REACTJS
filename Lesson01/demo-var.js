// biến toàn cục
var x;
x=10;
// định nghĩa hàm
function varDemo(){
    console.log("Biến toàn cục",x);
}
// gọi hàm
varDemo();

// Biến cục bộ
function varDemo1(){
    var y=100;
    console.log("Biến cục bộ y=",y);
    y="Devmaster";
    console.log("y=",y);
    var y="Academy";
    console.log("Khai báo lại y=",y);
}
varDemo1();

// test
// console.log("Lấy biến cục bộ yy =",y); //  y is not defined
console.log("Lấy biến toàn cục x =",x); // ok
