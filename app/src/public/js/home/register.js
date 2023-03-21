"use strict";

const email = document.querySelector("#email");
const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pw = document.querySelector("#pw");
const confirmPw = document.querySelector("#confirmPw");
const registerBtn = document.querySelector("#button");

console.log("hello regi");

registerBtn.addEventListener("click",register);

function register(){
    if(!id.value){
        return alert("input id");
    }
    if(pw.value !== confirmPw.value){
        console.log(pw, confirmPw)
        return alert("not confirm!")
    }
    const req = {
        email : email.value,
        id : id.value,
        name : name.value,
        pw : pw.value,
    };
    
    fetch("/register", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        }, 
        body : JSON.stringify(req),
    }).then((res)=> res.json())
      .then((res)=>{
        if(res.success){
            location.href = "/login";
        }else{
            alert(res.msg);
        }
      })
      .catch((err)=>{
        console.error(new Error('register error'));
      })
}


