function Student(email,password,firstname,lastname,age,grade101,grade102,grade103){
    this.emailP=email;
    this.passwordP=password;
    this.firstnameP=firstname;
    this.lastnameP=lastname;
    this.ageP=age;
    this.grade101P=grade101
    this.grade102P=grade102;
    this.grade103P=grade103;
}

function Register(){
let inputEmail = document.getElementById("txtEmail").value;
let inputPassword = document.getElementById("txtPassword").value;
let inputFirstName = document.getElementById("txtFirstName").value;
let inputLastName = document.getElementById("txtLastName").value;
let inputAge = document.getElementById("txtAge").value;
let inputGrade101 = document.getElementById("txtGrade101").value;
let inputGrade102 = document.getElementById("txtGrade102").value;
let inputGrade103 = document.getElementById("txtGrade103").value;


let newStudent = new Student (inputEmail,inputPassword,inputFirstName,inputLastName,inputAge,inputGrade101,inputGrade102,inputGrade103)

console.log(newStudent);

}


