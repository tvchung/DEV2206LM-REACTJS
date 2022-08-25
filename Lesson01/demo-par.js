// tham sô, tham số mặc định
// tham số
function add(a,b){
    return a+b;
}
console.log("Tổng:", add(100,20));

function sum(a,b=100){
    return a+b;
}
console.log("Sum:",sum(100,200));
console.log("Sum:",sum(100)); // không truyền giá trị cho tham số mặc định

// Gán giá trị mặc định cho tham số bên trong hàm
function show(name){
    name = name || "Devmaster Academy";
    console.log("Welcome to, ", name);
}
show();
show("Chung Trịnh");

