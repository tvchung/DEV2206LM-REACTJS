// Các tham số không xác định số lượng trước
function fn_Rest(num1,num2, ...number){
    console.log("num1:",num1,"; num2:",num2);
    console.log("Các giá trị khác:",...number);
}
// test
fn_Rest(100,200);
fn_Rest(100,200,300);
fn_Rest(100,200,300,400,500,600,700);