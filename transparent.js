//
// var i = 5;
// function myLoop() {
//   setTimeout(function() {
//     $("#c1").css("top", i + "%");
//     i += 0.1;
//     if (i < 75) {
//       myLoop();
//     }
//   }, i)
// }
//
//
// //myFunction();
// window.onload = myLoop();

// function myMove(circle) {
//   var elem = document.getElementById("circle");
//   var pos = 0;
//   var i = 6;
//   var id = setInterval(frame, i);
//   function frame() {
//     if (pos == 600) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }
//
// window.onload = myMove(c1);

$(document).on("mousemove", function(event) {

  const mouseX = event.pageX;
  const mouseY = event.pageY;

  //const ball = $(document).find("#ball");

  $('div.ball').css({
    'left': mouseX +'px',
    'top': mouseY +'px'
  });
});
// $("#ball").css("top", "100%");
// $("ball").css.style.left = mouseX + "px";
// $("ball").css.style.right = mouseY + "px";
// });
