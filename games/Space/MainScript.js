
var canvas = document.getElementById("mainCanvas");
var ctx = setupCanvas(document.querySelector('#mainCanvas'));

var flickerTime = 100;
var flicker = false;

var speed = 2;
if (anyLevel == "true" || anyLevel == true) {
  level = prompt("What level you want?")
}
else if (levelReset == true || levelReset == "true") {
  level = 0;

  levelReset = false;
  localStorage.setItem('levelReset', levelReset);
}
else {
  var level = localStorage.getItem('level');

  if (!level) {
    level = 0;
    localStorage.setItem('level', level);
  }

  level = parseInt(level)
}
var timer = 60;

const HEIGHT = 700;
const WIDTH = 1400;


var showDetectionBox = false;

var starsX = [Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2)]
var starsY = [Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2)]

var player1 = {
  x: WIDTH/4,
  y: HEIGHT/3,
  width: 13,
  height: 13,
  draw: function() {
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
    ctx.fillRect(player1.x-10, player1.y+3, player1.width, player1.height-4);
    ctx.fillRect(player1.x+10, player1.y+3, player1.width, player1.height-4);
    ctx.fillRect(player1.x + 3, player1.y-13, player1.width-6, player1.height);
    ctx.fillRect(player1.x-8, player1.y-10, player1.width-8, player1.height);
    ctx.fillRect(player1.x+16, player1.y-10, player1.width-8, player1.height);
  },
  reIns: function() {
    player1.x = WIDTH/4;
    player1.y = HEIGHT/3;
    player1.width = 13;
    player1.height = 13;
  }
};

var player1C = {
  x: player1.x - 10,
  y: player1.y - 13,
  width: 34,
  height: 26,
  draw: function() {
    ctx.fillRect(player1C.x, player1C.y, player1C.width, player1C.height);
  }
}


var flickerBar = {
  x: 10,
  y: 10,
  width: flickerTime,
  height: 20,
  draw: function() {
    if (flickerTime < 0) {
      ctx.fillRect(flickerBar.x, flickerBar.y, 0, flickerBar.height);
    }
    else {
      ctx.fillRect(flickerBar.x, flickerBar.y, flickerTime, flickerBar.height);
    }
  },
  reIns: function() {
    flickerBar.x = 10,
    flickerBar.y = 10,
    flickerBar.width = flickerTime;
    flickerBar.height = 20
  }
}

var l1En1 = {
  x: WIDTH/8,
  y: 10,
  width: 25,
  height: 25,
  draw: function() {
    if (showDetectionBox == true) {
      ctx.fillRect(l1En1.x, l1En1.y, l1En1.width, l1En1.height);
    }
    else {
      ctx.fillRect(l1En1.x, l1En1.y, l1En1.width, l1En1.height-15);
      ctx.fillRect(l1En1.x, l1En1.y, l1En1.width/6, l1En1.height-4);
      ctx.fillRect(l1En1.x+21, l1En1.y, l1En1.width/6, l1En1.height-4);
      ctx.fillRect(l1En1.x+10, l1En1.y, l1En1.width/5, l1En1.height+2);
      ctx.fillRect(l1En1.x+5, l1En1.y-2, l1En1.width-10, l1En1.height-10);
    }
  },
  reIns: function() {
    l1En1.x = WIDTH/8;
    l1En1.y = 10
  }
}
var l1En1Speed = Math.random()*2 + 0.25;

var l1En2 = {
  x: WIDTH/2.5,
  y: 10,
  width: 25,
  height: 25,
  draw: function() {
    if (showDetectionBox == true) {
      ctx.fillRect(l1En2.x, l1En2.y, l1En2.width, l1En2.height);
    }
    else {
      ctx.fillRect(l1En2.x, l1En2.y, l1En2.width, l1En2.height-15);
      ctx.fillRect(l1En2.x, l1En2.y, l1En2.width/6, l1En2.height-4);
      ctx.fillRect(l1En2.x+21, l1En2.y, l1En2.width/6, l1En2.height-4);
      ctx.fillRect(l1En2.x+10, l1En2.y, l1En2.width/5, l1En2.height+2);
      ctx.fillRect(l1En2.x+5, l1En2.y-2, l1En2.width-10, l1En2.height-10);
    }
  },
  reIns: function() {
    l1En2.x = WIDTH/2.5;
    l1En2.y = 10;
  }
}
var l1En2Speed = Math.random()*2 + 0.25;

var l4En1 = {
  x: WIDTH/2-30,
  y: HEIGHT/2.5,
  width: 25,
  height: 25,
  draw: function() {
    if (showDetectionBox == true) {
      ctx.fillRect(l4En1.x, l4En1.y, l4En1.width, l4En1.height);
    }
    else {
      ctx.fillRect(l4En1.x + 13, l4En1.y, l4En1.width/4, l4En1.height);
      ctx.fillRect(l4En1.x + 9.5, l4En1.y + l4En1.width/4, l4En1.width/2, l4En1.height/2)
      ctx.fillRect(l4En1.x - 2, l4En1.y + l4En1.width/4 + 2.5, l4En1.width, l4En1.height/4)
    }
  },
  reIns: function() {
    l4En1.x = WIDTH/2-30;
    l4En1.y = 10;
  }
}
var l4En1Speed = Math.random()*2 + 0.5;



var l4En2 = {
  x: WIDTH/2-30,
  y: HEIGHT/8,
  width: 25,
  height: 25,
  draw: function() {
    if (showDetectionBox == true) {
      ctx.fillRect(l4En2.x, l4En2.y, l4En2.width, l4En2.height);
    }
    else {
      ctx.fillRect(l4En2.x + 13, l4En2.y, l4En2.width/4, l4En2.height);
      ctx.fillRect(l4En2.x + 9.5, l4En2.y + l4En2.width/4, l4En2.width/2, l4En2.height/2)
      ctx.fillRect(l4En2.x - 2, l4En2.y + l4En2.width/4 + 2.5, l4En2.width, l4En2.height/4)
    }
  },
  reIns: function() {
    l4En2.x = WIDTH/2-30;
    l4En2.y = HEIGHT/8;
  }
}
var l4En2Speed = Math.random()*2 + 0.5;

var l6En1 = {
  x: -30,
  y: 0,
  width: 30,
  height: 30,
  draw: function() {
    if (showDetectionBox == true) {
      ctx.fillRect(l6En1.x, l6En1.y, l6En1.width, l6En1.height);
    }
    else {
      ctx.fillRect(l6En1.x, l6En1.y, l6En1.width, l6En1.height-20);
      ctx.fillRect(l6En1.x+2.5, l6En1.y+10, l6En1.width-5, l6En1.height-20);
      ctx.fillRect(l6En1.x+5, l6En1.y+20, l6En1.width-10, l6En1.height-20);
    }
  },
  reIns: function() {
    l6En1.x = -30;
    l6En1.y = 0;
  }
}
var l6En1Be = {
  x: l6En1.x + 10,
  y: l6En1.y + 30,
  width: 10,
  height: HEIGHT,
  draw: function() {
    ctx.fillRect(l6En1Be.x, l6En1Be.y, l6En1Be.width, l6En1Be.height);
  },
  reIns: function() {
    l6En1Be.x = l6En1.x + 10;
    l6En1Be.y = l6En1.y + 30;
  }
}

var l6En1BeShow = false;

var l8En1 = {
  x: WIDTH/2,
  y: 0,
  width: 30,
  height: 30,
  draw: function() {
    if (showDetectionBox == true) {
      ctx.fillRect(l8En1.x, l8En1.y, l8En1.width, l8En1.height);
    }
    else {
      ctx.fillRect(l8En1.x, l8En1.y, l8En1.width, l8En1.height-20);
      ctx.fillRect(l8En1.x+2.5, l8En1.y+10, l8En1.width-5, l8En1.height-20);
      ctx.fillRect(l8En1.x+5, l8En1.y+20, l8En1.width-10, l8En1.height-20);
    }
  },
  reIns: function() {
    l8En1.x = WIDTH/2;
    l8En1.y = 0;
  }
}
var l8En1Be = {
  x: l8En1.x + 10,
  y: l8En1.y + 30,
  width: 10,
  height: HEIGHT,
  draw: function() {
    ctx.fillRect(l8En1Be.x, l8En1Be.y, l8En1Be.width, l8En1Be.height);
  },
  reIns: function() {
    l8En1Be.x = l8En1.x + 10;
    l8En1Be.y = l8En1.y + 30;
  }
}

var l8En1BeShow = false;


var l10Bo1 = {
  width: 45,
  height: 60,
  x: WIDTH/3-45/2,
  y: 10,
  draw: function() {
    if (showDetectionBox == true) {
      ctx.fillRect(l10Bo1.x, l10Bo1.y, l10Bo1.width, l10Bo1.height);
    }
    else {
      ctx.fillRect(l10Bo1.x-5, l10Bo1.y, l10Bo1.width+10, l10Bo1.height-35);
      ctx.fillRect(l10Bo1.x, l10Bo1.y, l10Bo1.width/6, l10Bo1.height-8);
      ctx.fillRect(l10Bo1.x+38, l10Bo1.y, l10Bo1.width/6, l10Bo1.height-8);
      ctx.fillRect(l10Bo1.x+18, l10Bo1.y, l10Bo1.width/5, l10Bo1.height+3);
      ctx.fillRect(l10Bo1.x+5, l10Bo1.y-2, l10Bo1.width-10, l10Bo1.height-50);
    }
  },
  reIns: function() {
    l10Bo1.x = WIDTH/3-45/2;
    l10Bo1.y = 10;
  }
}


var l11En1 = {
  x: 0,
  y: 15,
  width: 30,
  height: 30,
  draw: function() {
    if (showDetectionBox == true) {
      ctx.fillRect(l11En1.x, l11En1.y, l11En1.width, l11En1.height);
    }
    else {
      ctx.fillRect(l11En1.x, l11En1.y, l11En1.width-19, l11En1.height);
      ctx.fillRect(l11En1.x+10, l11En1.y+2.5, l11En1.width-19, l11En1.height-5);
      ctx.fillRect(l11En1.x+20, l11En1.y+5, l11En1.width-20, l11En1.height-10);
    }
  },
  reIns: function() {
    l11En1.x = WIDTH/2;
    l11En1.y = 0;
  }
}

var l11En1Be = {
  x: l11En1.x + 30,
  y: l11En1.y + 10,
  width: WIDTH,
  height: 10,
  draw: function() {
    ctx.fillRect(l11En1Be.x, l11En1Be.y, l11En1Be.width, l11En1Be.height);
  },
  reIns: function() {
    l11En1Be.x = l11En1.x + 30;
    l11En1Be.y = l11En1.y + 10;
  }
}

var l16En1 = {
  x: WIDTH/4,
  y: 50,
  width: 20,
  height: 20,
  draw: function() {
    ctx.fillRect(l16En1.x, l16En1.y, l16En1.width, l16En1.height)
  },
  reIns: function() {
    l16En1.x = WIDTH/4;
    l16En1.y = 50;
    l16En1.width = 10;
    l16En1.height = 10;
  }
}

var l17En1 = {
  x: WIDTH/4,
  y: 50,
  width: 20,
  height: 20,
  draw: function() {
    ctx.fillRect(l17En1.x, l17En1.y, l17En1.width, l17En1.height)
  },
  reIns: function() {
    l17En1.x = WIDTH/4;
    l17En1.y = 50;
    l17En1.width = 10;
    l17En1.height = 10;
  }
}

function main() {
		init();
    levelRepeatStuff();
    doTimer()
		var loop = function() {
      if (gameOver == false) {
        collision();
        update();
      }
			draw();
      controls();
      localStorage.setItem('level', level);
			window.requestAnimationFrame(loop, canvas);
		}
		window.requestAnimationFrame(loop, canvas);
};

var starOpacity = Math.random();

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
	ctx.save();


  if (gameOver == false) {
    if (starOpacity < 0.9) {
      starOpacity += Math.random()/5;
    }
    if (starOpacity < 0.1) {
      starOpacity -= Math.random()/5;
    }

    for (var i = 0; i < starsX.length; i++) {
      ctx.globalAlpha = starOpacity;
      ctx.fillStyle = "white";
      ctx.fillRect(starsX[i], starsY[i], 2, 2);
      ctx.globalAlpha = 1;
    }

    if (flicker == true) {
      ctx.fillStyle = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255);
    }
    else {
      ctx.fillStyle = "white";
    }
    player1.draw();

    ctx.fillStyle = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255);
    flickerBar.draw();

    ctx.fillStyle = "white";
    ctx.font = "10px Commodore2";
    ctx.fillText("Flicker Bar", 5, 46)

    if (level != 0) {
      ctx.fillStyle = "white";
      ctx.font = "15px Commodore2";
      ctx.fillText("Level: " + Math.floor(level), WIDTH/2 - 140, 20);

      ctx.fillStyle = "white";
      ctx.font = "15px Commodore2";
      ctx.fillText("Time: " + timer, WIDTH/2 - 130, 50);

      if (level == 10) {
        ctx.fillStyle = "white";
        ctx.font = "15px Commodore2";
        ctx.fillText("Boss Level!", WIDTH/2 - 145, 80);
      }
    };
    if (level == 1 || level == 2 || level == 3 || level == 4 || level == 5 || level == 6 || level == 7 || level == 8 || level == 9 || level == 10 || level == 12 || level == 13 || level == 14 || level == 15 || level == 18) {
      ctx.fillStyle = "red";
      l1En1.draw();
      l1En2.draw();
    }
    if (level == 4 || level == 5 || level == 7 || level == 8 || level == 9 || level == 13 || level == 14 || level == 15 || level == 18) {
      ctx.fillStyle = "red";
      l4En1.draw();
      l4En2.draw();
    }
    if (level == 6 || level == 7 || level == 8 || level == 9 || level == 15 || level == 18) {
      ctx.fillStyle = "blue";
      l6En1.draw();
      if (l6En1BeShow == true) {
        ctx.fillStyle = "red";
        l6En1Be.draw();
      }
    }
    if (level == 8 || level == 9 || level == 11 || level == 12 || level == 13 || level == 14 || level == 15 || level == 18) {
      ctx.fillStyle = "blue";
      l8En1.draw();
      if (l8En1BeShow == true) {
        ctx.fillStyle = "red";
        l8En1Be.draw();
      }
    }
    if (level == 10) {
      ctx.fillStyle = "red";
      l10Bo1.draw();
    }

    if (level == 11 || level == 12 || level == 13 || level == 14 || level == 15 || level == 18) {
      ctx.fillStyle = "blue";
      l11En1.draw();
      ctx.fillStyle = "red";
      l11En1Be.draw();
    }

    if (level == 16 || level == 17) {
      ctx.fillStyle = "gray";
      l16En1.draw();
    }
    if (level == 17) {
      ctx.fillStyle = "gray";
      l17En1.draw();
    }
  }
  else {
    ctx.fillStyle = "Red";
    ctx.font = "25px Commodore2";
    if (level == 18) {
      ctx.font = "15px Commodore2";
      ctx.fillText("Level 18 is the last level. It is impossible.", WIDTH/60, HEIGHT/4-25);
      ctx.fillText("Don't try to beat it...", WIDTH/60, HEIGHT/4);
    }
    else {
      ctx.fillText("Game Over", WIDTH/6, HEIGHT/4-25);
    }
  }



  ctx.restore();
}

$("#restart").click(function() {
  location.reload();
});

main();
