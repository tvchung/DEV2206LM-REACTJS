// Xây dựng lớp đối tượng
class Person{
    // hàm khởi tạo
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    // getter / setter
    setAge(age){
        this.age=age;
    }
    getAge(){
        return this.age;
    }

    setName(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }

    // methed
    printInfor = ()=>{
        console.log(this);
        console.log(this.getName());
        console.log(this.getAge());
    }

}

// khởi tạo đối tượng từ lớp
var p = new Person();
console.log(p);
// Truy xuât đến các thuộc tính của đối tượng
console.log("Name:", p.name);
console.log("Age:", p.age);
// gán giá trị cho thuộc tính của đối tượng
p.name="Chung Trịnh";
p.age=45;
console.log(p);

p.setName("Long An");
p.setAge(100);

console.log("Name:", p.getName());
console.log("Age:", p.getAge());

// gọi phương thức
p.printInfor();


// kế thừa trong OOP javascript

class Student extends Person{
    // hàm khởi tạo
    constructor(name,age, studentId){
        // console.log(name);
        super(name,age);
        this.studentId = studentId;
    }

    print = ()=>{
        console.log("Thông tin sinh viên");
        console.log("ID:",this.studentId);
        console.log("Name:", this.getName());
        console.log("Age:",this.getAge());
    }
}

var student = new Student("Chung",45,100);
student.print();

// student.printInfor();
