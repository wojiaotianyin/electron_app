"use strict";
// let button = document.getElementById('button1')
// button.onclick = function() {
//     let input = document.getElementById('input1')
//     console.log(input.value)
// }

let border = document.getElementById("changable_border");
let border_ = document.getElementById("border");
// console.log("🚀 ~ file: lib.js:11 ~ border_.getClientRects().width", border_.getClientRects()[0].width)

function resize(e) {
  border_.style.width = e.pageX + border_.getClientRects()[0].width + "px";
  console.log(border_.style.width);
}

function stopResize() {
  border_.removeEventListener("mousemove", resize);
}

border_.addEventListener("mousedown", function (e) {
  e.preventDefault();
  console.log("mousedown");
  border_.addEventListener("mousemove",resize(e));
  border_.addEventListener("mouseup", stopResize(e));
});

border.addEventListener("mousedown", (event) => {
  // 要素をクリックした時
  console.log("mousedown");
  console.log(event);
  const dragged = event.target;
  console.log(dragged); // これがバーを含めば要素を可変にする
  //   if (dragged)

  //   border.addEventListener("mousemove", (event) => {
  //     //マウスを動かしたとき
  //     console.log(event);
  //     // // ドラッグ中の要素の参照を保存
  //     // const dragged = event.target;
  //     // console.log(dragged)
  //     // // 半透明にする
  //     // event.target.classList.add("dragging");
  //   });
  border.addEventListener("mouseup", (event) => {
    //マウスを離したとき

    console.log("mouseup");
    console.log(event);
    stopResize();
    // // ドラッグ中の要素の参照を保存
    // const dragged = event.target;
    // console.log(dragged)
    // // 半透明にする
    // event.target.classList.add("dragging");
  });
});
