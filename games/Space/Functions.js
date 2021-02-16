
function setupCanvas(canvas) {
  // Get the device pixel ratio, falling back to 1.
  var dpr = window.devicePixelRatio || 1;
  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  var ctx = canvas.getContext('2d');
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  ctx.scale(dpr, dpr);
  return ctx;
}

var flickered = false;

var gameOver = false;

var text1 = 1;
var waiting = false;
var speech1 = "";
var timer1 = -1;
var show1 = "";
var done1 = false;
var wait1 = 0;

var niceText = "You saw nothing";

function generate_random_string(string_length){
    let random_string = '';
    let random_ascii;
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}

function init() {
  if (level == 0) {
    speech1 = "Hello? Heeelllooo?!";
    show1 = "H";
  }

  setInterval(function() {
    write();
    whatWrite();

    niceText = generate_random_string(5);

  }, 75);
}

function write() {
  timer1 += 1;
  if (timer1 >! speech1.length) {
    show1 += speech1.charAt(timer1)
  };
  if (timer1 > speech1.length && waiting == false) {
    done1 = true;
    text1 += 1;
  };
  document.getElementById("speech").innerHTML = show1;
  if (waiting == true) {
    wait1 += 1;
  };
};

function whatWrite() {
  if (done1 == true && level == 0) {
    if (text1 == 2) {
      waiting = true
      if (wait1 > 15) {
        show1 = "O";
        speech1 = "Oh, hi there.";

        ResetWrite()
      };
    }
    else if (text1 == 3) {
      waiting = true
      if (wait1 > 15) {
        ResetWrite()
        show1 = "Y";
        speech1 = "You are our new space fighter for the emperial army. You will deal with many minor spaceships.";
      };
    }
    else if (text1 == 4) {
      waiting = true
      if (wait1 > 15) {
        ResetWrite()
        show1 = "I";
        speech1 = "I have been instructed to teach you the basics of your ship.";
      };
    }
    else if (text1 == 5) {
      waiting = true
      if (wait1 > 15) {
        ResetWrite()
        show1 = "T";
        speech1 = "To move you must press the keys WASD or the arrow keys on the control panel infront of you.";
      };
    }
    else if (text1 == 6) {
      waiting = true
      if (wait1 > 15) {
        ResetWrite()
        show1 = "Y";
        speech1 = "Your space ship has a broken gun so there will be no shooting.";
      };
    }
    else if (text1 == 7) {
      waiting = true
      if (wait1 > 15) {
        ResetWrite()
        show1 = "B";
        speech1 = "But we did equip your ship with the finest of flicker tech. Flickering allows you to go through objects and enemies.";
      };
    }
    else if (text1 == 8) {
      waiting = true
      if (wait1 > 15) {
        ResetWrite()
        show1 = "T";
        speech1 = "To flicker you must press the F key on your control panel. The flickering takes time to recharge though so use it sparingly. (Top left hand corner is flicker bar.)";
      };
    }
    else if (text1 == 9) {
      waiting = true
      if (wait1 > 15) {
        ResetWrite()
        show1 = "Y";
        speech1 = "Your main goal is to avoid being killed by the enemy ships. Eventually they will go away.";
      };
    }
    else if (text1 == 10) {
      waiting = true
      if (wait1 > 15) {
        ResetWrite()
        show1 = "I";
        speech1 = "If you just keep heading the way you are going, you will be at the enemy base.";
      };
    }
    else if (text1 == 11) {
      waiting = true
      if (wait1 > 15) {
        ResetWrite()
        show1 = "A";
        speech1 = "Anyway good luck on your trip and don't touch the enemy ships.";
      };
    }
    else if (text1 == 12) {
      waiting = true;
      if (wait1 > 15) {
        ResetWrite();
        show1 = "";
        speech1 = "";
        level = 1;
      }
    }

  };




  if (flicker == true) {
    flickerTime -= 1.5;
  }
  else if (flickerTime < 99) {
    flickerTime += 0.5;
  };
  if (flickerTime < 0 && flickered == false) {
    flickerTime = -30;
    flickered = true;
  }
  else if (flickerTime > 0){
    flickered = false;
  }
};

function ResetWrite() {
  done1 = false;
  timer1 = -1;
  waiting = false;
  wait1 = 0;
}


function levelRepeatStuff() {
  setInterval(function() {
    if (level == 1) {
      level1();
    }
    else if (level == 2) {
      level2();
    }
    else if (level == 3) {
      level3();
    }
    else if (level == 4) {
      level4();
    }
    else if (level == 5) {
      level5();
    }
    else if (level == 6) {
      level6();
    }
    else if (level == 7) {
      level7();
    }
    else if (level == 8) {
      level8();
    }
    else if (level == 9) {
      level9();
    }
    else if (level == 10) {
      level10();
    }
    else if (level == 11) {
      level11();
    }
    else if (level == 12) {
      level12();
    }
    else if (level == 13) {
      level13();
    }
    else if (level == 14) {
      level14();
    }
    else if (level == 15) {
      level15();
    }
    else if (level == 16) {
      level16();
    }
    else if (level == 17) {
      level17();
    }
    else if (level == 18) {
      level18();
    }


    for (var i = 0; i < starsX.length; i++) {
      starsY[i] += 0.75;
      if (starsY[i] > HEIGHT/2) {
        starsY[i] = 0;
        starsX[i] = Math.floor(Math.random()*WIDTH/2)
      }
    }
  }, 5);
};

function reIns() {
  l1En1.reIns();
  l1En2.reIns();
  l4En1.reIns();
  l4En2.reIns();
  l6En1.reIns();
  l6En1Be.reIns();
  l8En1.reIns();
  l8En1Be.reIns();
  l10Bo1.reIns();
  l11En1.reIns();
  l11En1Be.reIns();
  l16En1.reIns();
  l17En1.reIns();
}

function update() {
  player1C.x = player1.x - 10;
  player1C.y = player1.y - 13;
};

function level1() {
  if (l1En1.y > HEIGHT/2) {
    l1En1.x = Math.floor(Math.random()*WIDTH/2);
    l1En1.y = 1;
  };

  l1En1.y += l1En1Speed;



  if (l1En2.y > HEIGHT/2) {
    l1En2.x = Math.floor(Math.random()*WIDTH/2);
    l1En2.y = 1;
  };

  l1En2.y += l1En2Speed;
};

function level2() {
  if (l1En1.y > HEIGHT/2) {
    l1En1.x = Math.floor(Math.random()*WIDTH/2);
    l1En1.y = 1;
  };

  l1En1.y += Math.random() * 1.5;

  if (l1En1.x > player1.x) {
    l1En1.x -= 0.5;
  }
  else {
    l1En1.x += 0.5;
  }


  if (l1En2.y > HEIGHT/2) {
    l1En2.x = Math.floor(Math.random()*WIDTH/2);
    l1En2.y = 1;
  };

  l1En2.y += Math.random() * 1.5;

  if (l1En2.x > player1.x) {
    l1En2.x -= 1;
  }
  else {
    l1En2.x += 1;
  }
}

function level3() {
  if (l1En1.y > HEIGHT/2) {
    l1En1.x = Math.floor(Math.random()*WIDTH/2);
    l1En1.y = 1;
  };

  l1En1.y += Math.random() * 1.7;

  if (l1En1.x > player1.x) {
    l1En1.x -= 1;
  }
  else {
    l1En1.x += 1;
  }


  if (l1En2.y > HEIGHT/2) {
    l1En2.x = Math.floor(Math.random()*WIDTH/2);
    l1En2.y = 1;
  };

  l1En2.y += Math.random() * 1.7;

  if (l1En2.x > player1.x) {
    l1En2.x -= 1.4;
  }
  else {
    l1En2.x += 1.4;
  }
}


function level4() {
  if (l1En1.y > HEIGHT/2) {
    l1En1.x = Math.floor(Math.random()*WIDTH/2);
    l1En1.y = 1;
  };

  l1En1.y += l1En1Speed;



  if (l1En2.y > HEIGHT/2) {
    l1En2.x = Math.floor(Math.random()*WIDTH/2);
    l1En2.y = 1;
  };

  l1En2.y += l1En2Speed;




  if (l4En1.x < 0) {
    l4En1.x = WIDTH/2;
    l4En1.y = Math.floor(Math.random()*HEIGHT/2);
  };

  l4En1.x -= l4En1Speed;



  if (l4En2.x < 0) {
    l4En2.x = WIDTH/2;
    l4En2.y = Math.floor(Math.random()*HEIGHT/2);
  };

  l4En2.x -= l4En2Speed;
};



function level5() {
  if (l1En1.y > HEIGHT/2) {
    l1En1.x = Math.floor(Math.random()*WIDTH/2);
    l1En1.y = 1;
  };

  l1En1.y += Math.random() * 2.4 + 1;

  if (l1En2.y > HEIGHT/2) {
    l1En2.x = Math.floor(Math.random()*WIDTH/2);
    l1En2.y = 1;
  };

  l1En2.y += Math.random() * 2.4 + 1;


  if (l4En1.x < 0) {
    l4En1.x = WIDTH/2;
    l4En1.y = Math.floor(Math.random()*HEIGHT/2);
  };

  l4En1.x -= Math.random() * 2.4 + 1;

  if (l4En2.x < 0) {
    l4En2.x = WIDTH/2;
    l4En2.y = Math.floor(Math.random()*HEIGHT/2);
  };

  l4En2.x -= Math.random() * 2.4 + 1;
};

var way1 = false;
function level6() {
  if (l1En1.y > HEIGHT/2) {
    l1En1.x = Math.floor(Math.random()*WIDTH/2);
    l1En1.y = 1;
  };

  l1En1.y += l1En1Speed;



  if (l1En2.y > HEIGHT/2) {
    l1En2.x = Math.floor(Math.random()*WIDTH/2);
    l1En2.y = 1;
  };

  l1En2.y += l1En2Speed;

  if (way1 == false) {
    l6En1.x -= 0.3;
  }
  else {
    l6En1.x += 0.3;
  }

  if (l6En1.x > WIDTH/2) {
    way1 = false;
  }
  else if (l6En1.x < 0) {
    way1 = true;
  }

  l6En1BeShow = true;
  l6En1Be.x = l6En1.x + 10;
  l6En1Be.y = l6En1.y + 30;
}

function level7() {
  if (l1En1.y > HEIGHT/2) {
    l1En1.x = Math.floor(Math.random()*WIDTH/2);
    l1En1.y = 1;
  };

  l1En1.y += l1En1Speed;



  if (l1En2.y > HEIGHT/2) {
    l1En2.x = Math.floor(Math.random()*WIDTH/2);
    l1En2.y = 1;
  };

  l1En2.y += l1En2Speed;

  if (way1 == false) {
    l6En1.x -= 0.3;
  }
  else {
    l6En1.x += 0.3;
  }

  if (l6En1.x > WIDTH/2) {
    way1 = false;
  }
  else if (l6En1.x < 0) {
    way1 = true;
  }

  l6En1BeShow = true;
  l6En1Be.x = l6En1.x + 10;
  l6En1Be.y = l6En1.y + 30;

  if (l4En1.x < 0) {
    l4En1.x = WIDTH/2;
    l4En1.y = Math.floor(Math.random()*HEIGHT/2);
  };

  l4En1.x -= l4En1Speed;



  if (l4En2.x < 0) {
    l4En2.x = WIDTH/2;
    l4En2.y = Math.floor(Math.random()*HEIGHT/2);
  };

  l4En2.x -= l4En2Speed;
}

var way2 = true;

function level8() {
  if (l1En1.y > HEIGHT/2) {
    l1En1.x = Math.floor(Math.random()*WIDTH/2);
    l1En1.y = 1;
  };

  l1En1.y += l1En1Speed;



  if (l1En2.y > HEIGHT/2) {
    l1En2.x = Math.floor(Math.random()*WIDTH/2);
    l1En2.y = 1;
  };

  l1En2.y += l1En2Speed;

  if (way1 == false) {
    l6En1.x -= 0.3;
  }
  else {
    l6En1.x += 0.3;
  }

  if (l6En1.x > WIDTH/2) {
    way1 = false;
  }
  else if (l6En1.x < 0) {
    way1 = true;
  }

  l6En1BeShow = true;
  l6En1Be.x = l6En1.x + 10;
  l6En1Be.y = l6En1.y + 30;

  if (l4En1.x < 0) {
    l4En1.x = WIDTH/2;
    l4En1.y = Math.floor(Math.random()*HEIGHT/2);
  };

  l4En1.x -= l4En1Speed;



  if (l4En2.x < 0) {
    l4En2.x = WIDTH/2;
    l4En2.y = Math.floor(Math.random()*HEIGHT/2);
  };

  l4En2.x -= l4En2Speed;


  if (way2 == false) {
    l8En1.x -= 0.3;
  }
  else {
    l8En1.x += 0.3;
  }

  if (l8En1.x > WIDTH/2) {
    way2 = false;
  }
  else if (l8En1.x < 0) {
    way2 = true;
  }

  l8En1BeShow = true;
  l8En1Be.x = l8En1.x + 10;
  l8En1Be.y = l8En1.y + 30;
}


function level9() {
  if (l1En1.y > HEIGHT/2) {
    l1En1.x = Math.floor(Math.random()*WIDTH/2);
    l1En1.y = 1;
  };

  l1En1.y += Math.random()*2 + 0.7;;



  if (l1En2.y > HEIGHT/2) {
    l1En2.x = Math.floor(Math.random()*WIDTH/2);
    l1En2.y = 1;
  };

  l1En2.y += Math.random()*2 + 0.7;

  if (way1 == false) {
    l6En1.x -= Math.random()*1.5 + 0.1;
  }
  else {
    l6En1.x += Math.random()*1.5 + 0.1;
  }

  if (l6En1.x > WIDTH/2) {
    way1 = false;
  }
  else if (l6En1.x < 0) {
    way1 = true;
  }

  l6En1BeShow = true;
  l6En1Be.x = l6En1.x + 10;
  l6En1Be.y = l6En1.y + 30;

  if (l4En1.x < 0) {
    l4En1.x = WIDTH/2;
    l4En1.y = Math.floor(Math.random()*HEIGHT/2);
  };

  l4En1.x -= Math.random()*2 + 0.7;



  if (l4En2.x < 0) {
    l4En2.x = WIDTH/2;
    l4En2.y = Math.floor(Math.random()*HEIGHT/2);
  };

  l4En2.x -= l4En2Speed;


  if (way2 == false) {
    l8En1.x -= 0.3;
  }
  else {
    l8En1.x += 0.3;
  }

  if (l8En1.x > WIDTH/2) {
    way2 = false;
  }
  else if (l8En1.x < 0) {
    way2 = true;
  }

  l8En1BeShow = true;
  l8En1Be.x = l8En1.x + 10;
  l8En1Be.y = l8En1.y + 30;
}

var bossGoL10 = false;
var boTimerL10 = 0;
function level10() {
  if (boTimerL10 > 500 && bossGoL10 == false) {
    bossGoL10 = true;
  }
  if (bossGoL10 == true) {
    l10Bo1.y += 3.5;
  }
  if (l10Bo1.y > HEIGHT/2) {
    l10Bo1.y = 10;
    l10Bo1.x = Math.floor(Math.random()*WIDTH/2);
    boTimerL10 = 0;
    bossGoL10 = false;
  }

  if (l10Bo1.x > player1.x) {
    l10Bo1.x -= 1;
  }
  else if (l10Bo1.x < player1.x) {
    l10Bo1.x += 1;
  }

  if (bossGoL10 == false) {
    boTimerL10 += 1;
  }

  if (l1En1.y > HEIGHT/2) {
    l1En1.x = Math.floor(Math.random()*WIDTH/2);
    l1En1.y = 1;
  };

  l1En1.y += Math.random() * 1.7;

  if (l1En1.x > player1.x) {
    l1En1.x -= 1;
  }
  else {
    l1En1.x += 1;
  }


  if (l1En2.y > HEIGHT/2) {
    l1En2.x = Math.floor(Math.random()*WIDTH/2);
    l1En2.y = 1;
  };

  l1En2.y += Math.random() * 1.7;

  if (l1En2.x > player1.x) {
    l1En2.x -= 1;
  }
  else {
    l1En2.x += 1;
  }
}

var way3 = true;

function level11() {
  if (way2 == false) {
    l8En1.x -= 1.5;
  }
  else {
    l8En1.x += 1.5;
  }

  if (l8En1.x > WIDTH/2) {
    way2 = false;
  }
  else if (l8En1.x < 0) {
    way2 = true;
  }

  l8En1BeShow = true;
  l8En1Be.x = l8En1.x + 10;
  l8En1Be.y = l8En1.y + 30;


  if (way3 == false) {
    l11En1.y -= 1;
  }
  else {
    l11En1.y += 1;
  }

  if (l11En1.y > HEIGHT/2) {
    way3 = false;
  }
  else if (l11En1.y < 0) {
    way3 = true;
  }

  l11En1BeShow = true;
  l11En1Be.x = l11En1.x + 30;
  l11En1Be.y = l11En1.y + 10;
}

function level12() {
  if (way2 == false) {
    l8En1.x -= 1;
  }
  else {
    l8En1.x += 1;
  }

  if (l8En1.x > WIDTH/2) {
    way2 = false;
  }
  else if (l8En1.x < 0) {
    way2 = true;
  }

  l8En1BeShow = true;
  l8En1Be.x = l8En1.x + 10;
  l8En1Be.y = l8En1.y + 30;


  if (way3 == false) {
    l11En1.y -= 1;
  }
  else {
    l11En1.y += 1;
  }

  if (l11En1.y > HEIGHT/2) {
    way3 = false;
  }
  else if (l11En1.y < 0) {
    way3 = true;
  }

  l11En1BeShow = true;
  l11En1Be.x = l11En1.x + 30;
  l11En1Be.y = l11En1.y + 10;



  if (l1En1.y > HEIGHT/2) {
    l1En1.x = Math.floor(Math.random()*WIDTH/2);
    l1En1.y = 1;
  };

  l1En1.y += Math.random() * 1.5;

  if (l1En1.x > player1.x) {
    l1En1.x -= 0.5;
  }
  else {
    l1En1.x += 0.5;
  }


  if (l1En2.y > HEIGHT/2) {
    l1En2.x = Math.floor(Math.random()*WIDTH/2);
    l1En2.y = 1;
  };

  l1En2.y += Math.random() * 1.5;

  if (l1En2.x > player1.x) {
    l1En2.x -= 1;
  }
  else {
    l1En2.x += 1;
  }
}



function level13() {
  if (way2 == false) {
    l8En1.x -= 0.5;
  }
  else {
    l8En1.x += 0.5;
  }

  if (l8En1.x > WIDTH/2) {
    way2 = false;
  }
  else if (l8En1.x < 0) {
    way2 = true;
  }

  l8En1BeShow = true;
  l8En1Be.x = l8En1.x + 10;
  l8En1Be.y = l8En1.y + 30;


  if (way3 == false) {
    l11En1.y -= 0.5;
  }
  else {
    l11En1.y += 0.5;
  }

  if (l11En1.y > HEIGHT/2) {
    way3 = false;
  }
  else if (l11En1.y < 0) {
    way3 = true;
  }

  l11En1BeShow = true;
  l11En1Be.x = l11En1.x + 30;
  l11En1Be.y = l11En1.y + 10;



  if (l1En1.y > HEIGHT/2) {
    l1En1.x = Math.floor(Math.random()*WIDTH/2);
    l1En1.y = 1;
  };

  l1En1.y += Math.random() * 1.5;

  if (l1En1.x > player1.x) {
    l1En1.x -= 0.5;
  }
  else {
    l1En1.x += 0.5;
  }


  if (l1En2.y > HEIGHT/2) {
    l1En2.x = Math.floor(Math.random()*WIDTH/2);
    l1En2.y = 1;
  };

  l1En2.y += Math.random() * 1.5;

  if (l1En2.x > player1.x) {
    l1En2.x -= 1;
  }
  else {
    l1En2.x += 1;
  }

  if (l4En1.x < 0) {
    l4En1.x = WIDTH/2;
    l4En1.y = Math.floor(Math.random()*HEIGHT/2);
  };

  l4En1.x -= l4En1Speed;



  if (l4En2.x < 0) {
    l4En2.x = WIDTH/2;
    l4En2.y = Math.floor(Math.random()*HEIGHT/2);
  };

  l4En2.x -= l4En2Speed;
}

function level14() {
  if (way2 == false) {
    l8En1.x -= 0.8;
  }
  else {
    l8En1.x += 0.8;
  }

  if (l8En1.x > WIDTH/2) {
    way2 = false;
  }
  else if (l8En1.x < 0) {
    way2 = true;
  }

  l8En1BeShow = true;
  l8En1Be.x = l8En1.x + 10;
  l8En1Be.y = l8En1.y + 30;


  if (way3 == false) {
    l11En1.y -= 0.9;
  }
  else {
    l11En1.y += 0.9;
  }

  if (l11En1.y > HEIGHT/2) {
    way3 = false;
  }
  else if (l11En1.y < 0) {
    way3 = true;
  }

  l11En1BeShow = true;
  l11En1Be.x = l11En1.x + 30;
  l11En1Be.y = l11En1.y + 10;



  if (l1En1.y > HEIGHT/2) {
    l1En1.x = Math.floor(Math.random()*WIDTH/2);
    l1En1.y = 1;
  };

  l1En1.y += Math.random() * 1.5;

  if (l1En1.x > player1.x) {
    l1En1.x -= 0.9;
  }
  else {
    l1En1.x += 0.9;
  }


  if (l1En2.y > HEIGHT/2) {
    l1En2.x = Math.floor(Math.random()*WIDTH/2);
    l1En2.y = 1;
  };

  l1En2.y += Math.random() * 1.5;

  if (l1En2.x > player1.x) {
    l1En2.x -= 1;
  }
  else {
    l1En2.x += 1;
  }

  if (l4En1.x < 0) {
    l4En1.x = WIDTH/2;
    l4En1.y = Math.floor(Math.random()*HEIGHT/2);
  };

  l4En1.x -= l4En1Speed;



  if (l4En2.x < 0) {
    l4En2.x = WIDTH/2;
    l4En2.y = Math.floor(Math.random()*HEIGHT/2);
  };


  l4En2.x -= l4En2Speed;
}


function level15() {
  if (way2 == false) {
    l8En1.x -= 0.8;
  }
  else {
    l8En1.x += 0.8;
  }

  if (l8En1.x > WIDTH/2) {
    way2 = false;
  }
  else if (l8En1.x < 0) {
    way2 = true;
  }

  l8En1BeShow = true;
  l8En1Be.x = l8En1.x + 10;
  l8En1Be.y = l8En1.y + 30;


  if (way3 == false) {
    l11En1.y -= 0.9;
  }
  else {
    l11En1.y += 0.9;
  }

  if (l11En1.y > HEIGHT/2) {
    way3 = false;
  }
  else if (l11En1.y < 0) {
    way3 = true;
  }

  l11En1BeShow = true;
  l11En1Be.x = l11En1.x + 30;
  l11En1Be.y = l11En1.y + 10;



  if (l1En1.y > HEIGHT/2) {
    l1En1.x = Math.floor(Math.random()*WIDTH/2);
    l1En1.y = 1;
  };

  l1En1.y += Math.random() * 1.5;

  if (l1En1.x > player1.x) {
    l1En1.x -= 0.9;
  }
  else {
    l1En1.x += 0.9;
  }


  if (l1En2.y > HEIGHT/2) {
    l1En2.x = Math.floor(Math.random()*WIDTH/2);
    l1En2.y = 1;
  };

  l1En2.y += Math.random() * 1.5;

  if (l1En2.x > player1.x) {
    l1En2.x -= 1;
  }
  else {
    l1En2.x += 1;
  }

  if (l4En1.x < 0) {
    l4En1.x = WIDTH/2;
    l4En1.y = Math.floor(Math.random()*HEIGHT/2);
  };

  l4En1.x -= l4En1Speed;



  if (l4En2.x < 0) {
    l4En2.x = WIDTH/2;
    l4En2.y = Math.floor(Math.random()*HEIGHT/2);
  };

  if (l4En2.y > player1.y) {
    l4En2.y -= 0.5;
  }
  if (l4En2.y < player1.y) {
    l4En2.y += 0.5;
  }

  if (l4En1.y > player1.y) {
    l4En1Speed.y -= 0.5;
  }
  if (l4En1.y < player1.y) {
    l4En1.y += 0.5;
  }

  l4En2.x -= l4En2Speed;
}

var l16En1SpeedX = 0;
var l16En1SpeedY = 0;

function level16() {

  if (l16En1SpeedX < 4) {
    l16En1SpeedX += Math.floor(Math.random()*2)
  }
  if (l16En1SpeedX > 0.1) {
    l16En1SpeedX -= Math.floor(Math.random()*1.5)
  }

  if (l16En1SpeedY < 1) {
    l16En1SpeedY += Math.floor(Math.random()*2)
  }
  if (l16En1SpeedY > 0.1) {
    l16En1SpeedY -= Math.floor(Math.random()*1.5)
  }

  l16En1.x += l16En1SpeedX;
  l16En1.y += l16En1SpeedY;

  if (l16En1.x > WIDTH/2) {
    l16En1.x = 0;
    l16En1.y = Math.floor(Math.random()*HEIGHT/2);
  }
  if (l16En1.y > HEIGHT/2) {
    l16En1.y = 0;
    l16En1.x = Math.floor(Math.random()*WIDTH/2);
  }
};

var l17En1SpeedX = 0;
var l17En1SpeedY = 0;

function level17() {

  if (l16En1SpeedX < 4) {
    l16En1SpeedX += Math.floor(Math.random()*2)
  }
  if (l16En1SpeedX > 0.1) {
    l16En1SpeedX -= Math.floor(Math.random()*1.5)
  }

  if (l16En1SpeedY < 1) {
    l16En1SpeedY += Math.floor(Math.random()*2)
  }
  if (l16En1SpeedY > 0.1) {
    l16En1SpeedY -= Math.floor(Math.random()*1.5)
  }

  l16En1.x += l16En1SpeedX;
  l16En1.y += l16En1SpeedY;

  if (l16En1.x > WIDTH/2) {
    l16En1.x = 0;
    l16En1.y = Math.floor(Math.random()*HEIGHT/2);
  }
  if (l16En1.y > HEIGHT/2) {
    l16En1.y = 0;
    l16En1.x = Math.floor(Math.random()*WIDTH/2);
  }

  //-------------------------------------------

  if (l17En1SpeedX < 4) {
    l17En1SpeedX += Math.floor(Math.random()*2)
  }
  if (l17En1SpeedX > 0.1) {
    l17En1SpeedX -= Math.floor(Math.random()*1.5)
  }

  if (l17En1SpeedY < 1) {
    l17En1SpeedY += Math.floor(Math.random()*2)
  }
  if (l17En1SpeedY > 0.1) {
    l17En1SpeedY -= Math.floor(Math.random()*1.5)
  }

  l17En1.x += l17En1SpeedX;
  l17En1.y += l17En1SpeedY;

  if (l17En1.x > WIDTH/2) {
    l17En1.x = 0;
    l17En1.y = Math.floor(Math.random()*HEIGHT/2);
  }
  if (l17En1.y > HEIGHT/2) {
    l17En1.y = 0;
    l17En1.x = Math.floor(Math.random()*WIDTH/2);
  }
};






function level18() {
  if (way2 == false) {
    l8En1.x -= 1.6;
  }
  else {
    l8En1.x += 1.6;
  }

  if (l8En1.x > WIDTH/2) {
    way2 = false;
  }
  else if (l8En1.x < 0) {
    way2 = true;
  }

  l8En1BeShow = true;
  l8En1Be.x = l8En1.x + 10;
  l8En1Be.y = l8En1.y + 30;


  if (way3 == false) {
    l11En1.y -= 1.8;
  }
  else {
    l11En1.y += 1.8;
  }

  if (l11En1.y > HEIGHT/2) {
    way3 = false;
  }
  else if (l11En1.y < 0) {
    way3 = true;
  }

  l11En1BeShow = true;
  l11En1Be.x = l11En1.x + 30;
  l11En1Be.y = l11En1.y + 10;



  if (l1En1.y > HEIGHT/2) {
    l1En1.x = Math.floor(Math.random()*WIDTH/2);
    l1En1.y = 1;
  };

  l1En1.y += Math.random() * 3;

  if (l1En1.x > player1.x) {
    l1En1.x -= 1.8;
  }
  else {
    l1En1.x += 1.8;
  }


  if (l1En2.y > HEIGHT/2) {
    l1En2.x = Math.floor(Math.random()*WIDTH/2);
    l1En2.y = 1;
  };

  l1En2.y += Math.random() * 3;

  if (l1En2.x > player1.x) {
    l1En2.x -= 2;
  }
  else {
    l1En2.x += 2;
  }

  if (l4En1.x < 0) {
    l4En1.x = WIDTH/2;
    l4En1.y = Math.floor(Math.random()*HEIGHT/2);
  };

  l4En1.x -= l4En1Speed;



  if (l4En2.x < 0) {
    l4En2.x = WIDTH/2;
    l4En2.y = Math.floor(Math.random()*HEIGHT/2);
  };

  if (l4En2.y > player1.y) {
    l4En2.y -= 2;
  }
  if (l4En2.y < player1.y) {
    l4En2.y += 2;
  }

  if (l4En1.y > player1.y) {
    l4En1Speed.y -= 2;
  }
  if (l4En1.y < player1.y) {
    l4En1.y += 2;
  }

  l4En2.x -= l4En2Speed;
}


function doTimer() {
  setInterval(function() {
    if (level == 1 || level == 2 || level == 3 || level == 4 || level == 5 || level == 6 || level == 7 || level == 8 || level == 9 || level == 10 || level == 11 || level == 12 || level == 13 || level == 14 || level == 15 || level == 16 || level == 17 || level == 18) {
      if (timer != 0 && gameOver == false) {
        timer -= 1;
      }
    }


    if (timer == 0 && level == 1) {
        level += 0.5;
        timer = 60;

        text1 = 1;
        waiting = false;
        speech1 = "Great Job! You got past your first-ever wave of enemies! (Press Enter to start next Level)";
        timer1 = -1;
        show1 = "G";
        done1 = false;
        wait1 = 0;
    }

    if (timer == 0 && level == 2) {
      level += 0.5;
      timer = 60;

      text1 = 1;
      waiting = false;
      speech1 = "Nice! You did it again. So I better tell you about our empire since you just got recruited. The leader of our empire decided we are just fighting this other empire now. It seems a bit dumb to me. (Press Enter to start next Level)";
      timer1 = -1;
      show1 = "N";
      done1 = false;
      wait1 = 0;
    }

    if (timer == 0 && level == 3) {
      level += 0.5;
      timer = 60;

      text1 = 1;
      waiting = false;
      speech1 = "Oh, hi. Good job again. So the commander might demote me from my position now to assistant janitor. After I... uhh. I thought that the leader was stupid for starting a war over nothing. But I now agree that the leader is correct to start the war.";
      timer1 = -1;
      show1 = "O";
      done1 = false;
      wait1 = 0;
    }
    if (timer == 0 && level == 4) {
      level += 0.5;
      timer = 60;

      text1 = 1;
      waiting = false;
      speech1 = "Hey there. So the closer you get to the enemy base the more powerful the enemies are. You still have a long way to go before you get to the enemey base though.";
      timer1 = -1;
      show1 = "H";
      done1 = false;
      wait1 = 0;
    }

    if (timer == 0 && level == 5) {
      level += 0.5;
      timer = 60;

      text1 = 1;
      waiting = false;
      speech1 = "Ya, so about that thing I was telling you about. You know the thing about me being demoted. They are still deciding when my final day is. So you are going to get either a new person to talk to you or a robot after I am gone.";
      timer1 = -1;
      show1 = "Y";
      done1 = false;
      wait1 = 0;
    }

    if (timer == 0 && level == 6) {
      level += 0.5;
      timer = 60;

      text1 = 1;
      waiting = false;
      speech1 = "Oh yes. I forgot to tell you this but there are these machines that shoot laser beams.";
      timer1 = -1;
      show1 = "O";
      done1 = false;
      wait1 = 0;
    }

    if (timer == 0 && level == 7) {
      level += 0.5;
      timer = 60;

      text1 = 1;
      waiting = false;
      speech1 = "Hi. I don't know what else to say.";
      timer1 = -1;
      show1 = "H";
      done1 = false;
      wait1 = 0;
    }


    if (timer == 0 && level == 8) {
      level += 0.5;
      timer = 60;

      text1 = 1;
      waiting = false;
      speech1 = "So I uh. I will be demoted soon. I barley convinced them to give me assistant janitor. They thought I still had bad thoughts.";
      timer1 = -1;
      show1 = "S";
      done1 = false;
      wait1 = 0;
    }

    if (timer == 0 && level == 9) {
      level += 0.5;
      timer = 60;

      text1 = 1;
      waiting = false;
      speech1 = "Hey. So this will be my last day here. You will be assisted by a new robotic machine. By the way they are going to give me the new assistant assistant janitor job. So I assist the assistant.";
      timer1 = -1;
      show1 = "H";
      done1 = false;
      wait1 = 0;
    }

    if (timer == 0 && level == 10) {
      level += 0.5;
      timer = 60;

      text1 = 1;
      waiting = false;
      speech1 = "Hello. I am robot type C12. I will be your new instructor. Your previous instructor was inadequate for the job. Please forget anything your previous instructor told you about the Great Grand Leader.";
      timer1 = -1;
      show1 = "H";
      done1 = false;
      wait1 = 0;
    }

    if (timer == 0 && level == 11) {
      level += 0.5;
      timer = 60;

      text1 = 1;
      waiting = false;
      speech1 = "Hello! I am here to say good job! ";
      timer1 = -1;
      show1 = "H";
      done1 = false;
      wait1 = 0;
    }

    if (timer == 0 && level == 12) {
      level += 0.5;
      timer = 60;

      text1 = 1;
      waiting = false;
      speech1 = "Hello! Good job! You are doing well. Keep pressing on. You are doing great.";
      timer1 = -1;
      show1 = "H";
      done1 = false;
      wait1 = 0;
    }

    if (timer == 0 && level == 13) {
      level += 0.5;
      timer = 60;

      text1 = 1;
      waiting = false;
      speech1 = "We know that our pilots get angry because the enemy won't give up. But think about this. If the enemy did give up then that won't be fun. Don't you want a fun war?";
      timer1 = -1;
      show1 = "W";
      done1 = false;
      wait1 = 0;
    }

    if (timer == 0 && level == 14) {
      level += 0.5;
      timer = 60;

      text1 = 1;
      waiting = false;
      speech1 = "We are making great progress on the war. Many of our fighter ships have destroyed the big ships. We are on sector 37 (the higher the sector the closer we are to the enemy base).";
      timer1 = -1;
      show1 = "W";
      done1 = false;
      wait1 = 0;
    }

    if (timer == 0 && level == 15) {
      level += 0.5;
      timer = 60;

      text1 = 1;
      waiting = false;
      speech1 = "Another good job again. There seems to be some space trash coming up. There movement patterns are very unconsistant and strange.";
      timer1 = -1;
      show1 = "A";
      done1 = false;
      wait1 = 0;
    }

    if (timer == 0 && level == 16) {
      level += 0.5;
      timer = 60;

      text1 = 1;
      waiting = false;
      speech1 = "We are making great progress! We just got past sector 12.";
      timer1 = -1;
      show1 = "W";
      done1 = false;
      wait1 = 0;
    }

    if (timer == 0 && level == 17) {
      level += 0.5;
      timer = 60;

      text1 = 1;
      waiting = false;
      speech1 = "Wfjiwifioawifojawiofiaifapiwfuiawhguahiaigap";
      timer1 = -1;
      show1 = "W";
      done1 = false;
      wait1 = 0;
    }
  }, 1000);
};
