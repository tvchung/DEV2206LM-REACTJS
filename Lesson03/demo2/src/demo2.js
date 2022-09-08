
const employee = {
    id:1000,
    name:"Devmaster",
    salary:2000
};

function display(){
    return(
        <div className="container">
            <p>ID: {employee.id}</p>
            <p>Name: {employee.name}</p>
            <p>Salary: {employee.salary}</p>
        </div>
    );
}

export default display;