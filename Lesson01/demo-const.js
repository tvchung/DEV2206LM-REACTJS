// khai báo biến hằng số
const PI=3.14;
console.log("Biến hằng PI:",PI);
function func1(){
   // PI=3.1415; // không cho phép gán lại
    //console.log("PI:",PI);
    const PI=3.1415; // ok
    console.log("PI:",PI);
}
func1();

if(PI==3.14){
    console.log("PI:",PI);
}