
function checkCollision(a, b) {
  return (a.x < b.x + b.width
    && a.y < b.y + b.height
    && b.x < a.x + a.width
    && b.y < a.y + a.height
    && b.x < a.x + a.height
    && b.y < a.y + a.width
  )
};

var player1P1 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
}

var player1P2 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
}

var player1P3 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
}

var player1P4 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
}

var player1P5 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
}

var player1P6 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
}

function upToDate() {
  player1P1.x = player1.x;
  player1P1.y = player1.y;
  player1P1.width = player1.width;
  player1P1.height = player1.height;

  player1P2.x = player1.x-10;
  player1P2.y = player1.y+3;
  player1P2.width = player1.width;
  player1P2.height = player1.height-4;

  player1P3.x = player1.x+10;
  player1P3.y = player1.y+3;
  player1P3.width = player1.width;
  player1P3.height = player1.height-4;

  player1P4.x = player1.x+3;
  player1P4.y = player1.y-13;
  player1P4.width = player1.width-6;
  player1P4.height = player1.height;

  player1P5.x = player1.x-8;
  player1P5.y = player1.y-10;
  player1P5.width = player1.width-8;
  player1P5.height = player1.height;

  player1P6.x = player1.x+16;
  player1P6.y = player1.y-10;
  player1P6.width = player1.width-8;
  player1P6.height = player1.height;
}


function collision() {
  if (level == 1 || level == 2 || level == 3 || level == 4 || level == 5 || level == 6 || level == 7 || level == 8 || level == 9 || level == 10 || level == 12 || level == 13 || level == 14 || level == 15 || level == 18) {
    let collision1 = checkCollision(player1P1, l1En1);
    if (collision1) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision2 = checkCollision(player1P2, l1En1);
    if (collision2) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision3 = checkCollision(player1P3, l1En1);
    if (collision3) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision4 = checkCollision(player1P4, l1En1);
    if (collision4) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision5 = checkCollision(player1P5, l1En1);
    if (collision5) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision6 = checkCollision(player1P6, l1En1);
    if (collision6) {
      if (flicker == false) {
        gameOver = true;
      };
    };







    let collision7 = checkCollision(player1P1, l1En2);
    if (collision7) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision8 = checkCollision(player1P2, l1En2);
    if (collision8) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision9 = checkCollision(player1P3, l1En2);
    if (collision9) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision10 = checkCollision(player1P4, l1En2);
    if (collision10) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision11 = checkCollision(player1P5, l1En2);
    if (collision11) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision12 = checkCollision(player1P6, l1En2);
    if (collision12) {
      if (flicker == false) {
        gameOver = true;
      };
    };
  }


  if (level == 4 || level == 5 || level == 7 || level == 8 || level == 9 || level == 13 || level == 14 || level == 15 || level == 18) {
    let collision13 = checkCollision(player1P1, l4En1);
    if (collision13) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision14 = checkCollision(player1P2, l4En1);
    if (collision14) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision15 = checkCollision(player1P3, l4En1);
    if (collision15) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision16 = checkCollision(player1P4, l4En1);
    if (collision16) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision17 = checkCollision(player1P5, l4En1);
    if (collision17) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision18 = checkCollision(player1P6, l4En1);
    if (collision18) {
      if (flicker == false) {
        gameOver = true;
      };
    };







    let collision19 = checkCollision(player1P1, l4En2);
    if (collision19) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision20 = checkCollision(player1P2, l4En2);
    if (collision20) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision21 = checkCollision(player1P3, l4En2);
    if (collision21) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision22 = checkCollision(player1P4, l4En2);
    if (collision22) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision23 = checkCollision(player1P5, l4En2);
    if (collision23) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision24 = checkCollision(player1P6, l4En2);
    if (collision24) {
      if (flicker == false) {
        gameOver = true;
      };
    };
  }



  if (level == 6 || level == 7 || level == 8 || level == 9) {
    let collision25 = checkCollision(player1P1, l6En1Be);
    if (collision25) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision26 = checkCollision(player1P2, l6En1Be);
    if (collision26) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision27 = checkCollision(player1P3, l6En1Be);
    if (collision27) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision28 = checkCollision(player1P4, l6En1Be);
    if (collision28) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision29 = checkCollision(player1P5, l6En1Be);
    if (collision29) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision30 = checkCollision(player1P6, l6En1Be);
    if (collision30) {
      if (flicker == false) {
        gameOver = true;
      };
    };
  }

  if (level == 8 || level == 9 || level == 11 || level == 12 || level == 13 || level == 14 || level == 15 || level == 18) {
    let collision31 = checkCollision(player1P1, l8En1Be);
    if (collision31) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision32 = checkCollision(player1P2, l8En1Be);
    if (collision32) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision33 = checkCollision(player1P3, l8En1Be);
    if (collision33) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision34 = checkCollision(player1P4, l8En1Be);
    if (collision34) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision35 = checkCollision(player1P5, l8En1Be);
    if (collision35) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision36 = checkCollision(player1P6, l8En1Be);
    if (collision36) {
      if (flicker == false) {
        gameOver = true;
      };
    };



    let collision37 = checkCollision(player1P1, l8En1);
    if (collision37) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision38 = checkCollision(player1P2, l8En1);
    if (collision38) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision39 = checkCollision(player1P3, l8En1);
    if (collision39) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision40 = checkCollision(player1P4, l8En1);
    if (collision40) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision41 = checkCollision(player1P5, l8En1);
    if (collision41) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision42 = checkCollision(player1P6, l8En1);
    if (collision42) {
      if (flicker == false) {
        gameOver = true;
      };
    };
  }

  if (level == 10) {
    let collision37 = checkCollision(player1P1, l10Bo1);
    if (collision37) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision38 = checkCollision(player1P2, l10Bo1);
    if (collision38) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision39 = checkCollision(player1P3, l10Bo1);
    if (collision39) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision40 = checkCollision(player1P4, l10Bo1);
    if (collision40) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision41 = checkCollision(player1P5, l10Bo1);
    if (collision41) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision42 = checkCollision(player1P6, l10Bo1);
    if (collision42) {
      if (flicker == false) {
        gameOver = true;
      };
    };
  }

  if (level == 11 || level == 12 || level == 13 || level == 14 || level == 15 || level == 18) {
    let collision31 = checkCollision(player1P1, l11En1Be);
    if (collision31) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision32 = checkCollision(player1P2, l11En1Be);
    if (collision32) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision33 = checkCollision(player1P3, l11En1Be);
    if (collision33) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision34 = checkCollision(player1P4, l11En1Be);
    if (collision34) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision35 = checkCollision(player1P5, l11En1Be);
    if (collision35) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision36 = checkCollision(player1P6, l11En1Be);
    if (collision36) {
      if (flicker == false) {
        gameOver = true;
      };
    };



    let collision37 = checkCollision(player1P1, l11En1);
    if (collision37) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision38 = checkCollision(player1P2, l11En1);
    if (collision38) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision39 = checkCollision(player1P3, l11En1);
    if (collision39) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision40 = checkCollision(player1P4, l11En1);
    if (collision40) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision41 = checkCollision(player1P5, l11En1);
    if (collision41) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision42 = checkCollision(player1P6, l11En1);
    if (collision42) {
      if (flicker == false) {
        gameOver = true;
      };
    };
  }


  if (level == 16 || level == 17) {
    let collision43 = checkCollision(player1P1, l16En1);
    if (collision43) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision44 = checkCollision(player1P2, l16En1);
    if (collision44) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision45 = checkCollision(player1P3, l16En1);
    if (collision45) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision46 = checkCollision(player1P4, l16En1);
    if (collision46) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision47 = checkCollision(player1P5, l16En1);
    if (collision47) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision48 = checkCollision(player1P6, l16En1);
    if (collision48) {
      if (flicker == false) {
        gameOver = true;
      };
    };
  }

// ------------------------------------------------------------

  if (level == 17) {
    let collision49 = checkCollision(player1P1, l17En1);
    if (collision49) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision50 = checkCollision(player1P2, l17En1);
    if (collision50) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision51 = checkCollision(player1P3, l17En1);
    if (collision51) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision52 = checkCollision(player1P4, l17En1);
    if (collision52) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision53 = checkCollision(player1P5, l17En1);
    if (collision53) {
      if (flicker == false) {
        gameOver = true;
      };
    };
    let collision54 = checkCollision(player1P6, l17En1);
    if (collision54) {
      if (flicker == false) {
        gameOver = true;
      };
    };
  }


  upToDate();
};
