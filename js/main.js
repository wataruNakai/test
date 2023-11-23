const hamburger = document.querySelector("#jsBtn")
const nav = document.querySelector(".gnav")

hamburger.addEventListener('click',()=> {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})
window.addEventListener("scroll", function () {
    // ヘッダーを変数の中に格納する
    const header = document.querySelector(".header");
    const pageTop = document.querySelector(".pageTop");
    // 100px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
    header.classList.toggle("scroll-nav", window.scrollY > 50);
    pageTop.classList.toggle("active", window.scrollY > 400);
  });