var nav_btns = document.querySelectorAll(".nav-btn")
var contents = document.querySelectorAll(".content")


nav_btns.forEach((btn, index) => {
    btn.onclick = function () {
        clearActive()
        btn.classList.add("active")
        contents[index].classList.add("active")
    }
});

function clearActive() {
    nav_btns.forEach(btn => {
        btn.classList.remove("active")
    });
    contents.forEach(content => {
        content.classList.remove("active")
    });
}

document.querySelector(".btn-style.c").onclick = function(){
    document.querySelector("#camera-view").classList.add("active")
}


document.querySelector(".fake-btn.m").onclick = function () {
    document.querySelector(".manual").classList.toggle("active")
    document.querySelector(".camera").classList.remove("active")

}

document.querySelector(".fake-btn.c").onclick = function () {
    document.querySelector(".camera").classList.toggle("active")
    document.querySelector(".manual").classList.remove("active")
}

var create = document.querySelectorAll(".create")
create.forEach(btn => {
    btn.onclick = function () {
        document.querySelector("#camera-view").classList.remove("active")
        document.querySelector(".manual").classList.remove("active")
        document.querySelector(".camera").classList.remove("active")

        document.querySelector(".review").classList.add("active");
        document.querySelector(".review").innerHTML = `
        <span>預覽結果</span>
        <div class="barcode">
            <div class="barcode-name">${document.querySelector("#code-name").value}</div>
            <img src="img/barcode.svg" alt="">
        </div>
        <div class="btn-style comfirm">確認</div>
        `

        document.querySelector(".comfirm").onclick = function () {
            document.querySelector("#main").innerHTML += `
            <div class="barcode">
                <div class="barcode-name">${document.querySelector("#code-name").value}</div>
                <img src="img/barcode.svg" alt="">
            </div>
            `
            alert("新增成功")
            document.querySelector(".review").classList.remove("active");
            document.querySelector(".review").innerHTML = ``
            document.querySelector("#code-name").value = null
        }
    }
});