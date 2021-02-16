
var speed = 10;

function controls() {
  if (keyRightDown == true && player1.x < WIDTH/2 - player1.width*2) player1.x += 5;
  if (keyLeftDown == true && player1.x > 15) player1.x -= 5;
  if (keyUpDown == true && player1.y > 15) player1.y -= 3;
  if (keyDownDown == true && player1.y < HEIGHT/2 - player1.height*2) player1.y += 3;
  if (keyFDown == true && flickerTime > -1) {
    flicker = true;
  }
  else {
    flicker = false;
  }
  if (keyPDown == true) {
    showDetectionBox = true
  }
  else {
    showDetectionBox = false;
  }



  if (keyEnterDown == true) {
    if (level == 1.5) {
      level = 2;
      SayNothing();
      reIns();
    }
    if (level == 2.5) {
      level = 3;
      SayNothing();
      reIns();
    }
    if (level == 3.5) {
      level = 4;
      SayNothing();
      reIns();
    }
    if (level == 4.5) {
      level = 5;
      SayNothing();
      reIns();
    }
    if (level == 5.5) {
      level = 6;
      SayNothing();
    }
    if (level == 6.5) {
      level = 7;
      SayNothing();
      reIns();
    }
    if (level == 7.5) {
      level = 8;
      SayNothing();
      reIns();
    }
    if (level == 8.5) {
      level = 9;
      SayNothing();
      reIns();
    }
    if (level == 9.5) {
      level = 10;
      SayNothing();
      reIns();
    }
    if (level == 10.5) {
      level = 11;
      SayNothing();
      reIns();
    }
    if (level == 11.5) {
      level = 12;
      SayNothing();
      reIns();
    }
    if (level == 12.5) {
      level = 13;
      SayNothing();
      reIns();
    }
    if (level == 13.5) {
      level = 14;
      SayNothing();
      reIns();
    }
    if (level == 14.5) {
      level = 15
      SayNothing();
      reIns();
    }
    if (level == 15.5) {
      level = 16
      SayNothing();
      reIns();
    }
    if (level == 16.5) {
      level = 17
      SayNothing();
      reIns();
    }
    if (level == 17.5) {
      level = 18
      SayNothing();
      reIns();
    }



    if (gameOver == true) {
      location.reload();
    }
  }
}

function SayNothing() {
  text1 = 1;
  waiting = false;
  speech1 = "";
  timer1 = -1;
  show1 = "";
  done1 = false;
  wait1 = 0;
}

// controls for the game
var keyRightDown = false;
var keyLeftDown = false;
var keyUpDown = false;
var keyDownDown = false
var keyFDown = false;
var keyEnterDown = false;
var keyPDown = false;
document.onkeydown = function(e) {
	if (e.keyCode == 37 || e.keyCode == 65) {
		keyLeftDown = true;
	};
	if (e.keyCode == 39 || e.keyCode == 68) {
		keyRightDown = true;
	};
  if (e.keyCode == 38 || e.keyCode == 87) {
    keyUpDown = true;
  };
  if (e.keyCode == 40 || e.keyCode == 83) {
    keyDownDown = true;
  };
  if (e.keyCode == 70) {
    keyFDown = true;
  };
  if (e.keyCode == 13) {
    keyEnterDown = true;
  }
  if (e.keyCode == 80) {
    keyPDown = true;
  }
};
document.onkeyup = function(e) {
	if (e.keyCode == 37 || e.keyCode == 65) {
		keyLeftDown = false;
	};
	if (e.keyCode == 39 || e.keyCode == 68) {
		keyRightDown = false;
	};
  if (e.keyCode == 38 || e.keyCode == 87) {
    keyUpDown = false;
  };
  if (e.keyCode == 40 || e.keyCode == 83) {
    keyDownDown = false;
  };
  if (e.keyCode == 70) {
    keyFDown = false;
  };
  if (e.keyCode == 13) {
    keyEnterDown = false;
  }
  if (e.keyCode == 80) {
    keyPDown = false;
  }
};
// End of Controls
