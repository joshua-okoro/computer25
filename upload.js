
let submitupload=document.getElementById("submitupload");
let inputfiles=document.getElementById("inputfiles");


inputfiles.addEventListener("change",changepic);
let output="";

function changepic(){
    let reader=new FileReader();
    reader.addEventListener("load",loadall);
   function loadall(){
    localStorage.setItem("dataall",reader.result)
   }
   reader.readAsDataURL(this.files[0])
}

document.addEventListener("DOMContentLoaded",contenofload);
function contenofload(){
    let storageall=localStorage.getItem("dataall");
    if(storageall){
        document.getElementById("uploadpic").setAttribute("src",storageall)
    }
}