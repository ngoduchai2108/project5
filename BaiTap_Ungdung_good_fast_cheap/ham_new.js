let click1=1;
let click2=1;
let click3=1;
function change1() {
    if (click1==1){
        anh1.src="anh2.JPG";
        click1 = 0;
    }
    else
    {
        anh1.src="anh1.JPG";
        click1 = 1;
    }
}
function change2() {
    if (click2==1){
        anh2.src="anh2.JPG";
        click2 = 0;
    }
    else
    {
        anh2.src="anh1.JPG";
        click2 = 1;
    }
}
function change3() {
    if (click3==1){
        anh3.src="anh2.JPG";
        click3 = 0;
    }
    else
    {
        anh3.src="anh1.JPG";
        click3 = 1;
    }
}
