var click1 = 0;
var click2 = 0;
var click3 = 0;
var click4 = 0;
var click5 = 0;

function change1() {
    // if (click1==1){
    //     anh1.src="monkey1.jpg";
    //     click1=2;
    // }
    // else if (click1==2){
    //     anh1.src="pandan1.jpg";
    //     click1=3;
    // } else {
    //     anh1.src="funny1.jpg";
    //     click1=1;
    // }
    var a = Math.floor(Math.random() * 10);
    click1 = a % 3;
    switch (click1) {
        case 0:
            anh1.src = "monkey1.jpg";
            click1 = 1;
            break;
        case 1:
            anh1.src = "panda1.jpg";
            click1 = 2;
            break;
        case 2:
            anh1.src = "funny1.jpg";
            click1 = 0;
            break;
    }
    if (click1 == click2 && click2 == click3 && click3 == click4 && click4 == click5) {
        // document.getElementById('hienthi').innerHTML="right";
        alert("Chuc Mung hinh xep dung!")
    }
}

function change2() {
    var a = Math.floor(Math.random() * 10);
    click2 = a % 3;
    switch (click2) {
        case 0:
            anh2.src = "monkey2.jpg";
            click2 = 1;
            break;
        case 1:
            anh2.src = "panda2.jpg";
            click2 = 2;
            break;
        case 2:
            anh2.src = "funny2.jpg";
            click2 = 0;
            break;
    }
    if (click1 == click2 && click2 == click3 && click3 == click4 && click4 == click5) {
        // document.getElementById('hienthi').innerHTML="right";
        alert("Chuc Mung hinh xep dung!")
    }
}

function change3() {
    var a = Math.floor(Math.random() * 10);
    click3 = a % 3;
    switch (click3) {
        case 0:
            anh3.src = "monkey3.jpg";
            click3 = 1;
            break;
        case 1:
            anh3.src = "panda3.jpg";
            click3 = 2;
            break;
        case 2:
            anh3.src = "funny3.jpg";
            click3 = 0;
            break;
    }
    if (click1 == click2 && click2 == click3 && click3 == click4 && click4 == click5) {
        // document.getElementById('hienthi').innerHTML="right";
        alert("Chuc Mung hinh xep dung!")
    }

}

function change4() {
    var a = Math.floor(Math.random() * 10);
    click4 = a % 3;
    switch (click4) {
        case 0:
            anh4.src = "monkey4.jpg";
            click4 = 1;
            break;
        case 1:
            anh4.src = "panda4.jpg";
            click4 = 2;
            break;
        case 2:
            anh4.src = "funny4.jpg";
            click4 = 0;
            break;
    }
    if (click1 == click2 && click2 == click3 && click3 == click4 && click4 == click5) {
        // document.getElementById('hienthi').innerHTML="right";
        alert("Chuc Mung hinh xep dung!")
    }

}

function change5() {
    var a = Math.floor(Math.random() * 10);
    click5 = a % 3;
    switch (click5) {
        case 0:
            anh5.src = "monkey5.jpg";
            click5 = 1;
            break;
        case 1:
            anh5.src = "panda5.jpg";
            click5 = 2;
            break;
        case 2:
            anh5.src = "funny5.jpg";
            click5 = 0;
            break;
    }
    if (click1 == click2 && click2 == click3 && click3 == click4 && click4 == click5) {
        // document.getElementById('hienthi').innerHTML = "right";
        alert("Chuc Mung hinh xep dung!");
    }
}