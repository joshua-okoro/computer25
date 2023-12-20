
function check1all(){

    let url=localStorage.getItem("datas");
 let imgs=new Image();
 imgs.src=url;

 let div=document.createElement("div");
 let img=document.createElement("img");
 img=imgs
 div.append(img);
 `<div class="mees">${document.getElementById("yearup1").appendChild(div)}</div>`


}
check1all()

function check2all(){

    let url=localStorage.getItem("datass");
 let imgs=new Image();
 imgs.src=url;

 let div=document.createElement("div");
 let img=document.createElement("img");
 img=imgs
 div.append(img);
 `<div class="mees">${document.getElementById("year2").appendChild(div)}</div>`


}
check2all()

function check3all(){
let url=localStorage.getItem("datases");
 let imgs=new Image();
 imgs.src=url;

 let div=document.createElement("div");
 let img=document.createElement("img");
 img=imgs
 div.append(img);
 `<div class="mees">${document.getElementById("year3").appendChild(div)}</div>`


}
check3all()


