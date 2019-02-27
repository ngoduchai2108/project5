// let a ;
// let b ;
// let c ;
function process() {
    let a2= document.getElementById('vitri1').checked;
    if (a2==true){
        let b1=document.getElementById('vitri2').checked
        let c1=document.getElementById('vitri3').checked
        if (b1==true && c1==true) {
            document.getElementById('vitri2').checked=false;
        }
    }
    else {
        let b1=document.getElementById('vitri2').checked
        let c1=document.getElementById('vitri3').checked
        if (b1==true && c1==false){
           document.getElementById('vitri3').checked = true;
        }
        else (b1==false && c1==true)
        {
            document.getElementById('vitri2').checked = true;
        }
    }
}
function eventPress() {
    window.addEventListener("keydown", process)
}
function change1() {
    // let a1=document.getElementById('vitri1').checked
    // if (a1){
    //     // a=true;
    //     process();
    // }
    // else {
    //     // a=false;
    //     process();
    // }
    process();
}
function change2() {
    let b2=document.getElementById('vitri2').checked;
    if (b2==true){
        let a1=document.getElementById('vitri1').checked
        let c1=document.getElementById('vitri3').checked
        if (a1==true && c1==true) {
            document.getElementById('vitri1').checked=false;
        }
    }
    else {
        let a1=document.getElementById('vitri1').checked
        let c1=document.getElementById('vitri3').checked
        if (a1==true && c1==false){
            document.getElementById('vitri3').checked = true;
        }
        else (a1==false && c1==true)
        {
            document.getElementById('vitri1').checked = true;
        }
    }
}
function change3() {
    let c2=document.getElementById('vitri3').checked;
    if (c2==true){
        let b1=document.getElementById('vitri2').checked
        let a1=document.getElementById('vitri1').checked
        if (b1==true && a1==true) {
            document.getElementById('vitri2').checked=false;
        }
    }
    else {
        let b1=document.getElementById('vitri2').checked
        let a1=document.getElementById('vitri1').checked
        if (b1==true && a1==false){
            document.getElementById('vitri1').checked = true;
        }
        else (b1==false && a1==true)
        {
            document.getElementById('vitri2').checked = true;
        }
    }
}