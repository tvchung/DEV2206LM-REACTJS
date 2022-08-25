// arrow function

// hàm thông thường
function show(name="Devmaster"){
    console.log("Welcome to, ", name);
}
show();
show("Devmaster Academy");

// arrow function
var display = (name="Devmaster")=>{
    console.log("Arrow fn:",name);
}
display();
display("Chung Trịnh");

// xây dựng các arrow function cho các yêu cầu sau
/*
- hàm kiểm tra số nguyên tố
- hàm tính toán với các phép tính +,-,*,/,% trên 2 số
- Hàm tính tổng các số nguyên (tham số tùy biến - các tham số biến đổi)
*/

const check = (num)=>{
    let flag = true;
    if(num<2){
        return false;
    }

    for (let i = 2; i <= num/2; i++) {
        if(num % i == 0){
            flag = false;
            break;
        }
    }

    return flag;
}

// test
console.log(check(1));
console.log(check(2));
console.log(check(6));
//hàm tính toán với các phép tính +,-,*,/,% trên 2 số

var tinhToan = (pt, a, b)=>{
    let res = eval(a + pt + b);
    console.log(a,pt,b,"=",res);
}

console.log("=====tính toán");
tinhToan('+',100,123);
tinhToan('-',100,123);
tinhToan('*',100,123);
tinhToan('/',100,123);
tinhToan('%',123,100);

// Hàm tính tổng các số nguyên 
// (tham số tùy biến - các tham số biến đổi)
var tong = (...num)=>{
    let t =0 ;
    console.log(...num);
    num.forEach(element => {
        t +=element;
    });
    return t;
}

kq = tong(10);
console.log("Tổng: ", kq);
kq = tong(10,20);
console.log("Tổng: ", kq);
kq = tong(10,20,30);
console.log("Tổng: ", kq);
kq = tong(10,25,25,35);
console.log("Tổng: ", kq);


