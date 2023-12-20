let uploadresult1=document.getElementById("uploadresult1");
let yearup1=document.getElementById("year1");
let outputup="";
uploadresult1.addEventListener("change",uploadresult1all)
function uploadresult1all(){
    let reader=new FileReader();
    reader.addEventListener("load",loadallupload);
    function loadallupload(){
        localStorage.setItem("datas",reader.result)
    }
    reader.readAsDataURL(this.files[0])
}
document.addEventListener("DOMContentLoaded",contenload);
function contenload(){
    let stores=localStorage.getItem("datas");
    if(stores){
       yearup1.setAttribute("src",stores) 
    }
}

let uploadresult2=document.getElementById("uploadresult2");
let yearup2=document.getElementById("year2");
let outputup2="";
uploadresult2.addEventListener("change",uploadresult1all2)
function uploadresult1all2(){
    let reader=new FileReader();
    reader.addEventListener("load",loadallupload2);
    function loadallupload2(){
        localStorage.setItem("datass",reader.result)
    }
    reader.readAsDataURL(this.files[0])
}
document.addEventListener("DOMContentLoaded",contenload2);
function contenload2(){
    let storess=localStorage.getItem("datass");
    if(storess){
       yearup2.setAttribute("src",storess) 
    }
}

let uploadresult3=document.getElementById("uploadresult3");
let yearup3=document.getElementById("year3");
let outputup3="";
uploadresult3.addEventListener("change",uploadresult1all3)
function uploadresult1all3(){
    let reader1=new FileReader();
    reader1.addEventListener("load",loadallupload3);
    function loadallupload3(){
        localStorage.setItem("datases",reader1.result)
    }
    reader1.readAsDataURL(this.files[0])
}
document.addEventListener("DOMContentLoaded",contenload3);
function contenload3(){
    let storesse=localStorage.getItem("datases");
    if(storesse){
       yearup3.setAttribute("src",storesse) 
    }
}



