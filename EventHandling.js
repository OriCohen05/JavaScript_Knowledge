function hide(id) {
    document.getElementById(id).style.visibility = "hidden";
}


function show(id) {
    document.getElementById(id).style.visibility = 'visible'
}


function increase(id) {
    document.getElementById(id).width += 10
    document.getElementById(id).height += 10
}


function decrease(id) {
    document.getElementById(id).width -= 10
    document.getElementById(id).height -= 10
}


function swap(id1, id2) {
    var src1 = document.getElementById(id1).getAttribute('src')
    var src2 = document.getElementById(id2).getAttribute('src')
    document.getElementById(id1).setAttribute('src', src2)
    document.getElementById(id2).setAttribute('src', src1)
}


function dynamic_picture() {
    var x = Math.floor(Math.random() * 6)
    if (x == 0) {
        location.reload();
    }
    var src = "../Images/" + x + ".png"
    var td = document.getElementById('td1')
    var img = document.createElement('img')
    img.setAttribute('src', src)
    img.setAttribute('height', 150);
    img.setAttribute('width', 150);
    img.setAttribute('onclick', "alert(this.src)")
    td.appendChild(img);


}


dynamic_picture()


function changeBackground(color) {
    document.body.style.background = color;
}