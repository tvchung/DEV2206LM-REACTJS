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
export default Person;