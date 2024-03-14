// for signup
let asignup = document.querySelector("#asignup");
let signUpBtn = document.querySelector(".signupBtn");
let mainSignup = document.querySelector(".main-signup");
let signEmail = document.querySelector("#signEmail");
let signMob = document.querySelector("#signmob");
let signUsername = document.querySelector("#signUsername");
let signPass = document.querySelector("#signPassword");

// for login
let loginBtn = document.querySelector(".loginBtn");
let mainLogin = document.querySelector(".main-login");
let alogin = document.querySelector("#alogin");
let loginUsername = document.querySelector("#loginUsername");
let loginPass = document.querySelector("#loginPassword");


const user = [];

asignup.addEventListener("click",()=>{
    mainSignup.style.display = "block";
    mainLogin.style.display = "none";
});

signUpBtn.addEventListener("click",()=>{
  if(signEmail.value != "" && signMob.value != "" && signUsername.value != "" && signPass.value != ""){
    user.push(`${signEmail.value}`);
    signEmail.value = "";

    user.push(`${signMob.value}`);
    signMob.value = "";

    user.push(`${signUsername.value}`);
    signUsername.value = "";

    user.push(`${signPass.value}`);
    signPass.value = "";

    mainSignup.style.display = "none";
    mainLogin.style.display = "block";

    alert("SignUp Successfully!");
    }
    else{
        alert("Please enter correct information!");
        signEmail.value = "";
        signMob.value = "";
        signUsername.value = "";
        signPass.value = "";
    }
});

loginBtn.addEventListener("click",()=>{
    if((user[2] == loginUsername.value || user[3] == loginPass.value) && (loginUsername.value != "" || loginPass.value != "")){
        alert("Successfully Login!");
        let a = document.querySelector(".href");
        a.setAttribute("href","file:///E:/OASIS%20INFOBYTE/success.html");
    }
    else{
        alert("Please Enter correct information!");
        loginUsername.value = "";
        loginPass.value = "";
    }
});

alogin.addEventListener("click",()=>{
    mainSignup.style.display = "none";
    mainLogin.style.display = "block";
});
