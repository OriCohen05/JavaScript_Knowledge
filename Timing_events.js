// JavaScript source code
function f1() {
    document.getElementById("imgrow1").style.visibility = "visible";

}

function f1hi() {
    document.getElementById("imgrow1").style.visibility = "hidden";

}

function interval1() {
    var img = document.getElementById("imgrow1");
    if (img.style.visibility == 'hidden') {
        f1();

    } else {
        f1hi();

    }

}
var interval1call = setInterval("interval1()", 3000);
var counter = 0;

function f2(img11) {
    var hei = img11.getAttribute("height");
    var wid = img11.getAttribute("width");
    hei = hei - 20;
    wid = wid - 20;
    img11.setAttribute("height", hei);
    img11.setAttribute("width", wid);

}

function f2plus() {
    var img = document.getElementById("imgrow2");
    var height2 = img.getAttribute("height");
    var width2 = img.getAttribute("width");
    height2 = parseInt(height2);
    height2 = height2 + 20;
    width2 = parseInt(width2);
    width2 = width2 + 20;
    img.setAttribute("height", height2);
    img.setAttribute("width", width2);

}

function interval2() {
    var img = document.getElementById("imgrow2");
    counter++;
    if (counter <= 0) {
        f2();

    }
    if (counter <= 15 && counter > 0) {
        f2plus();


    }
    if (counter == 15) {
        counter = (15 * -1);

    }

}
var f2setinterval = setInterval(interval2(), 2000);


function f3() {
    var img1 = document.getElementById("img1row3");
    var scring1 = img1.getAttribute("src");
    var img2 = document.getElementById("img2row3");
    var scring2 = img2.getAttribute("src");
    img1.setAttribute("src", scring2);
    img2.setAttribute("src", scring1);

}
var interval3 = setInterval("f3()", 1000);
var count2 = 0;

function f4() {
    var td = document.getElementById("td");
    if (t <= 5) {
        img4.setAttribute("src", "Images/" + t + ".jpg");
        img4.setAttribute("width", "100");
        img4.setAttribute("height", "100");
        td.appendChild(img4);
        t++;
    }
}
var img4 = document.createElement("img");
var t = 1;
var interval4 = setInterval(f4, 1000);

function numIncrease(id, num) {
    var td = document.getElementById(id);
    td.innerHTML = x;
    x += num;
}
var td = document.getElementById("row5td4");
var id = td.getAttribute("id");
var num = 3;
var x = 0;
var numInc = setInterval(numIncrease, 3000, id, num);



function f6() {
    var selectname = document.getElementById("0select");
    var i = 0;
    i++;
    var color = document.getElementById(i);
    var table = document.getElementById("tbl");
    table.setAttribute("bgcolor", color.value);
    if (i == 1)
        selectname.innerHTML = "White";
    if (i == 2)
        selectname.innerHTML = "Light Green";
    if (i == 3)
        selectname.innerHTML = "Light Coral";
    if (i == 4)
        selectname.innerHTML = "Light Blue";
    if (i == 4)
        i = 0;

}
var interval6 = setInterval("f6()", 4000);