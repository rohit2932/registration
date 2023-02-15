let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let nameInput = localStorage.getItem('Is_Name');
let emailInput = localStorage.getItem('Is_Email');
let passwordInput = localStorage.getItem('Is_PW');
let dobInput = localStorage.getItem('Is_DateofBirth');
let acceptInput = localStorage.getItem('Is_Accepted');

// btnAdd.addEventListener('click',() =>{
//     let Name1 = document.getElementById("NM").value;
//     let Email1 = document.getElementById("EM").value;
//     let PW1 = document.getElementById("PW").value;
//     let DateOfBirth1 = document.getElementById("DB").value;
//     let Accepted = acceptInput;

//     let template = `
//                    <tr>
//                         <td>${Name1}</td>
//                         <td>${Email1}</td>
//                         <td>${PW1}</td>
//                         <td>${DateOfBirth1}</td>
//                         <td>${Accepted}</td>
//                    </tr>`;
//     table.innerHTML += template; 
 
// })
function seterror(id,error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}


function validateForm() {
    //var returnval = true; //true
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
    
    //validateDob();
    if (returnval = true){
            btnAdd.addEventListener('click',() =>{
                let Name1 = document.getElementById("name").value;
                let Email1 = document.getElementById("email").value;
                PW1 = document.getElementById("password").value;
                DateOfBirth1 = document.getElementById("dob").value;
                Accepted = acceptInput;

                let template = `
                            <tr>
                                <td>${Name1}</td>
                                <td>${Email1}</td>
                                <td>${PW1}</td>
                                <td>${DateOfBirth1}</td>
                                <td>${Accepted}</td>
                            </tr>`;
                table.innerHTML += template;
            })
    }
    else {
        returnval = false;

    }
    return returnval;
}

//////////////////////////////////////////////////////
function seterror1(id,error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror1')[0].innerHTML = error;

}
function validateDob() {

    var returnval = true;
    //Todays Date Year and Time ///////////////////////////////////////////////////////////////
    let currentdate = new Date().toJSON().slice(0,10);
    const tD = currentdate.split("-");
    let tdYear = tD[0];
    let tdMonth = tD[1];
    let tdDay= tD[2];
    const Currenttime = [tdDay,tdMonth,tdYear];

    //let now = new Date('${tdDay} ${tdMonth} ${tdYear}');
    //let tD1 = tD.join("");
    //let convert1 = Number(tD1);

    // Date Of Birth of the user ///////////////////////////////////////////////////////
    let date = document.forms["myform"]["DOB"].value;
    const InpD = date.split("-");
    let YOBU = InpD[0];
    let MOBU = InpD[1];
    let DOBU = InpD[2];
    const Dateofbirthofuser = [DOBU,MOBU,YOBU];

    //let InpD1 = InpD.join("");
    //let convert2 = Number(InpD1);

    let age = Currenttime[2] - Dateofbirthofuser[2];
    //let days = math.round(age/(1000*60*60*24));
    
    let validateage = age >= 18 && age <= 55;
    if (validateage == true) {
        returnval = true;
        validateForm();
        //seterror1("DOB1","*Age must be between 18 to 55");
    }
    else if(validateage == false){
        returnval = false;
        seterror1("DOB1","*Age must be between 18 to 55");
    }
    /////////////////////////////////////////////
    
    //return returnval;
}
function myfunc(event) {
    
    event.preventDefault();
    validateDob();

    var Name = document.getElementById("name").value;
    var Email = document.getElementById("email").value;
    var PW = document.getElementById("password").value;
    var DateOfBirth = document.getElementById("dob").value;
    var AcceptedInp = document.getElementById("ACC").value;

    localStorage.setItem('Is_Name',Name);
    localStorage.setItem('Is_Email',Email);
    localStorage.setItem('Is_PW',PW);
    localStorage.setItem('Is_DateofBirth',DateOfBirth);
    localStorage.setItem('Is_Accepted',AcceptedInp);

    // let Name1 = document.getElementById("1").innerHTML = localStorage.getItem('Is_Name');
    // let Email1 = document.getElementById("2").innerHTML = localStorage.getItem('Is_Email');
    // let PW1 = document.getElementById("3").innerHTML = localStorage.getItem('Is_PW');
    // let DateOfBirth1 = document.getElementById("4").innerHTML = localStorage.getItem('Is_DateofBirth');
    // let Accepted = document.getElementById("5").innerHTML = "Yes";

    
    
    
    

    
}