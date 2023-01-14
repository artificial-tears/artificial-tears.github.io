function firstLoad() {
    sessionStorage.setItem("loaded", true);
}

if(sessionStorage.getItem("loaded")) {
    // display black
    let bgdiv = document.getElementById("bgimg");
    bgdiv.innerHTML = `<img src="../assets/FrontPage/black-bg.jpeg" alt="blk" />`
} else {
    // black with animation
    let bgdiv = document.getElementById("bgimg");
    bgdiv.innerHTML = `<img class="fadeInBg" src="../assets/FrontPage/black-bg.jpeg" alt="blk" />`
}