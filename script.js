function seterror(id,error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}


function validateForm() {
    var returnval = true; //true
    var password = document.forms["myform"]["passW"].value;
    const passarray = password.split("");
    let charac = passarray.length >= 8 && passarray.length <= 32;
    if (charac == true) {
        returnval = true; //true
        
        
    }
    else {
        seterror("pass1","*Password must be between 8 to 32 characters");
        returnval = false;
    }
    
    validateDob();
   



    returnval = false;
    return returnval;
}
function validateDob() {
    function seterror1(id,error) {
        element = document.getElementById(id);
        element.getElementsByClassName('formerror1')[0].innerHTML = error;
    
    }

    let currentdate = new Date().toJSON().slice(0,10);
    const tD = currentdate.split("-");
    let tD1 = tD.join("");
    let convert1 = Number(tD1);
    let date = document.forms["myform"]["DOB"].value;
    const InpD = date.split("-");
    let InpD1 = InpD.join("");
    let convert2 = Number(InpD1);

    let age = convert1 - convert2;
    if (age < 18) {
        returnval = false;
        seterror1("DOB1","*Age must be between 18 to 55");
    }
    else if(age > 55){
        returnval = false;
        seterror("DOB1","*Age must be between 18 to 55");
    }
    else if(age >=18 && age <= 55){
        returnval = true;
    }
}
function myfunc(event) {
    
    event.preventDefault();
    validateForm();

    var Name = document.getElementById("NM").value;
    var Email = document.getElementById("EM").value;
    var PW = document.getElementById("PW").value;
    var DateOfBirth = document.getElementById("DB").value;

    localStorage.setItem('Is_Name',Name);
    localStorage.setItem('Is_Email',Email);
    localStorage.setItem('Is_PW',PW);
    localStorage.setItem('Is_DateofBirth',DateOfBirth);

    let Name1 = document.getElementById("1").innerHTML = Name;
    let Email1 = document.getElementById("2").innerHTML = Email;
    let PW1 = document.getElementById("3").innerHTML = PW;
    let DateOfBirth1 = document.getElementById("4").innerHTML = DateOfBirth;
    let Accepted = document.getElementById("5").innerHTML = "Yes";

    
    
    
    

    
}