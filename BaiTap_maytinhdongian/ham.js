let dau =1;
let pos =1;
let a ="";
let b ="";
let hienthi=document.getElementById('hienthi')
function AC() {
    dau=1;
    pos=1;
    a="";
    b="";
    hienthi.value="";
}
function a0() {
    if (pos==1) a+="0"
    else b+="0"
    hienthi.value+="0"
}
function a1() {
    if (pos==1) a+="1"
    else b+="1"
    hienthi.value+="1"
}
function a2() {
    if (pos==1) a+="2"
    else b+="2"
    hienthi.value+="2"
}
function a3() {
    if (pos==1) a+="3"
    else b+="3"
    hienthi.value+="3"
}
function a4() {
    if (pos==1) a+="4"
    else b+="4"
    hienthi.value+="4"
}
function a5() {
    if (pos==1) a+="5"
    else b+="5"
    hienthi.value+="5"
}
function a6() {
    if (pos==1) a+="6"
    else b+="6"
    hienthi.value+="6"
}
function a7() {
    if (pos==1) a+="7"
    else b+="7"
    hienthi.value+="7"
}
function a8() {
    if (pos==1) a+="8"
    else b+="8"
    hienthi.value+="8"
}
function a9() {
    if (pos==1) a+="9"
    else b+="9"
    hienthi.value+="9"
}
function cong() {
    pos=2;
    dau=1;
    hienthi.value+="+";
}
function tru() {
    pos=2;
    dau=2;
    hienthi.value+="-";
}
function nhan() {
    pos=2;
    dau=3;
    hienthi.value+="*";
}
function chia() {
    pos=2;
    dau=4;
    hienthi.value+="/";
}
function bang() {
    switch (dau) {
        case 1:
            hienthi.value=parseFloat(a)+parseFloat(b);
            a=hienthi.value;
            pos=1;
            b="";
            break;
        case 2:
            hienthi.value=parseFloat(a)-parseFloat(b);
            a=hienthi.value;
            pos=1;
            b="";
            break;
        case 3:
        hienthi.value=parseFloat(a)*parseFloat(b);
            a=hienthi.value;
            pos=1;
            b="";
            break;
        case 4:
         hienthi.value=parseFloat(a)/parseFloat(b);
            a=hienthi.value;
            pos=1;
            b="";
            break;
    }
}