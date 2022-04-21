const inputEmail = document.getElementById("email");
const inputPhoneNumber = document.getElementById("phone");
const inputDescription = document.getElementById("desc");

const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");

submitBtn.onclick = ()=>{
    let userEmail = inputEmail.value;
    let userPhone = inputPhoneNumber.value;
    let userDesc = inputDescription.value;
    let getLocalStorage = localStorage.getItem("Users");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push([userEmail, userPhone, userDesc]);
    localStorage.setItem("Users", JSON.stringify(listArr));
}

clearBtn.onclick = ()=>{
    inputEmail.value="";
    inputPhoneNumber.value="";
    inputDescription.value="";
}