var canvas = document.getElementById("myCanvas");
var l = canvas.getContext("2d");

canvas.width = 1080;
canvas.height = 820;
window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("1");
    ctx.drawImage(img, 540,10,60,60);
    ctx.drawImage(img,340,160,60,60);
    ctx.drawImage(img,740,160,60,60);
    ctx.drawImage(img,540,310,60,60);
    ctx.drawImage(img,340,460,60,60);
    ctx.drawImage(img,740,460,60,60);
    ctx.drawImage(img,540,610,60,60);
  };

  