const swiper = new Swiper(".swiper", {
  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination"
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: { // 自動再生させる
    delay: 3000, // 次のスライドに切り替わるまでの時間（ミリ秒）
    disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
    waitForTransition: false, // アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
  },
  loop: true,  // 無限ループさせる
  effect: 'fade', // フェードモードにする（デフォルトは 'slide'）
  fadeEffect: {
    crossFade: true, // クロスフェードを有効にする（フェードモードの場合 true 推奨）
  },
  speed: 1000 // スライドアニメーションのスピード（ミリ秒）
});