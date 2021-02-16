
    var canvas = document.getElementById('aliensCanvas')
    var ctx = canvas.getContext("2d");
  
  
    var best = localStorage.getItem('best');
    if(!best || best == "null" || best == null){
      localStorage.setItem('best', 0);
      best = 0;
    }
  
    var checker = localStorage.getItem('checker');
    if(!checker){
      localStorage.setItem('checker', false);
      checker = false;
    }
    else if (checker == null || checker == "null") {
      localStorage.setItem('checker', false);
      checker = false;
      $("#button2").html("Music: No");
    }
    else if (checker == true || checker == "true") {
      $("#button2").html("Music: Yes");
    }
    else if (checker == false || checker == "false") {
      $("#button2").html("Music: No");
    }
  
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
  
    var bulletx = [];
    var bullety = [];
    var bullets = 0;
  
    var bulletx2 = [];
    var bullety2 = [];
    var bullets2 = 0;
  
    var enbulletx = [];
    var enbullety = [];
    var enbullets = 0;
  
    var seconds = 0;
  
    var enx = [];
    var eny = [];
    var ens = 0;
  
    var enx1 = [];
    var eny1 = [];
    var ens1 = 0;
  
    var timer = 0;
    var timer2 = 0;
    var timer3 = 0;
    var timer4 = 0;
    var timer4end = 0;
    var timer5 = 0;
    var timer5end = 0;
  
    var timer6 = 0;
  
    var gameOver = false;
  
    var ufo = false;
  
    var ufoLives = 3;
    var ufoLives2 = 3;
  
    var ufoDone = false;
    var ufoDone2 = false;
    var ufoDone3 = false;
  
    var laserDone = false;
    var laserDone2 = false;
  
    var sec30 = false;
  
    var sec60 = false;
  
    var sec120 = false;
  
    var laserCord = undefined;
    var laserCord2 = undefined;
  
    var beaming = false;
  
    var beaming2 = false;
  
    var shooter = true;
  
    var mover = false;
  
    var player = {
      x: 1,
      y: 1,
      width: 15,
      height: 15,
      draw: function() {
        ctx.fillRect(player.x, player.y, player.width, player.height)
      }
    }
  
    var enemy1 = {
      x: WIDTH/2,
      y: HEIGHT/6,
      width: 15,
      height: 15,
      draw: function() {
        ctx.arc(enemy1.x, enemy1.y, 10, 0, 2 * Math.PI);
      }
    }
  
    var enemy2 = {
      x: WIDTH/2,
      y: HEIGHT/6,
      width: 15,
      height: 15,
      draw: function() {
        ctx.arc(enemy2.x, enemy2.y, 10, 0, 2 * Math.PI);
      }
    }
  
    var enemy3 = {
      x: WIDTH/6,
      y: HEIGHT/4,
      width: 15,
      height: 15,
      draw: function() {
        ctx.arc(enemy3.x, enemy3.y, 10, 0, 2 * Math.PI);
      }
    }
  
    var laser1 = {
      x: WIDTH/2,
      y: HEIGHT/6,
      width: 15,
      height: 10,
      draw: function() {
        ctx.arc(laser1.x, laser1.y, 10, 0, 2 * Math.PI);
      }
    }
  
    var laserBeam1 = {
      x: laser1.x - laser1.width/2,
      y: laser1.y + laser1.height/2,
      width: laser1.width,
      height: HEIGHT,
      draw: function() {
        ctx.fillRect(laser1.x - laser1.width/2, laser1.y + laser1.height/2, laser1.width, HEIGHT);
      }
    }
  
  
    var laser2 = {
      x: WIDTH/2,
      y: HEIGHT/6,
      width: 15,
      height: 10,
      draw: function() {
        ctx.arc(laser2.x, laser2.y, 10, 0, 2 * Math.PI);
      }
    }
  
    var laserBeam2 = {
      x: laser2.x - laser2.width/2,
      y: laser2.y + laser2.height/2,
      width: laser2.width,
      height: HEIGHT,
      draw: function() {
        ctx.fillRect(laser2.x - laser2.width/2, laser2.y + laser2.height/2, laser2.width, HEIGHT);
      }
    }
  
  
  
  
  
  
  
  
    function checkCollision4(a) {
      return (a.x < laser1.x - laser1.width/2 + laser1.width
        && a.y < laser1.y + laser1.height/2 + HEIGHT
        && laser1.x - laser1.width/2 < a.x + a.width
        && laser1.y + laser1.height/2 < a.y + a.height
        && laser1.x - laser1.width/2 < a.x + a.height
        && laser1.y + laser1.height/2 < a.y + a.width
      )
    }
  
    function startGame() {
      init();
      loop();
    }
  
    function globalvar() {
      localStorage.setItem('best', best);
      localStorage.setItem('checker', checker);
    }
  
    function loop() {
      setInterval(function() {
        if (gameOver == false) {
          update();
          draw();
          globalvar();
  
          if (gameOver == false) {
            document.getElementById("title2").innerHTML = "Timer: " + seconds;
  
            timer2 += 1;
  
            if (timer2 == 100) {
              timer2 = 0;
              seconds += 1;
            }
          }
  
          if (checker == true || checker == "true") {
            
          }
        }
        else {
          $('#aliensCanvas').hide();
          $('#text').hide();
          $('#title3').show();
          $('#button1').show();
  
          if (seconds > best) {
            best = seconds;
            localStorage.setItem('best', best);
          }
          $('#highScore').show();
          $("#highScore").html("High Score: " + best);
        }
      }, 10);
    }
  
  
  
    function check() {
      if (checker == false || checker == "false") {
        checker = true;
        $("#button2").html("Music: Yes");
        localStorage.setItem('checker', checker);
      }
      else if (checker == true || checker == "true") {
        checker = false;
        $("#button2").html("Music: No");
        souTimer.pause();
        souTimer.currentTime = 0;
        localStorage.setItem('checker', checker);
      }
      else if (checker == null || checker == "null") {
        checker = false;
        $("#button2").html("Music: Yes");
        localStorage.setItem('checker', checker);
      }
      console.log(checker);
    }
  
  
  
  
  
    function init() {
      player.x = WIDTH/2;
      player.y = HEIGHT/1.25;
  
      makeEnemy1();
    }
  
    function checkCollision(a, b, c) {
      return (a.x < b + 10
        && a.y < c + 10
        && b < a.x + a.width
        && c < a.y + a.height
        && b < a.x + a.height
        && c < a.y + a.width
      )
    }
  
    function checkCollision2(a, d, b, c) {
      return (a < b + 10
        && d < c + 10
        && b < a + 3
        && c < d + 10
        && b < a + 10
        && c < d + 3
      )
    }
  
    function checkCollision3(a, b) {
      return (a.x < b.x + b.width
        && a.y < b.y + b.height
        && b.x < a.x + a.width
        && b.y < a.y + a.height
        && b.x < a.x + a.height
        && b.y < a.y + a.width
      )
    }
  
    function update() {
      var speed = 2;
  
      if (mover == true) {
        if (keyUpDown == true && player.y > 0) player.y -= speed;
        if (keyDownDown == true && player.y + player.height < HEIGHT) player.y += speed;
      }
      if (keyLeftDown == true && player.x >= 0) player.x -= speed;
      if (keyRightDown == true && player.x + player.width <= WIDTH) player.x += speed;
      if (keySpaceDown == true) {
        if (timer > 49 && shooter == true) {
          makeBullet();
          if (checker == true || checker == "true") {
            
          }
          timer = 0;
        }
      }
  
      if (timer < 51) {
        timer += 1;
      }
  
      if (Math.floor(Math.random()*100) == 1 && ufo == true) {
        if (ufoDone == false || ufoDone2 == false) {
          makeEnBullet();
          if (checker == true || checker == "true") {
            shoot.play();
          }
        }
      }
  
      if (Math.floor(Math.random()*100) == 1) {
        if (ufoDone3 == false && sec30 == true) {
          make2EnBullet();
          if (checker == true || checker == "true") {
            shoot.play();
          }
        }
      }
  
  
      if (Math.floor(Math.random()*100) == 1) {
        if (sec120 == true) {
          makeBullet2();
          if (checker == true || checker == "true") {
            shoot.play();
          }
        }
      }
  
  
      for (var i = 0; i < bullets + 1; i++) {
        bullety[i] -= 0.01 * bullety[i] + 0.5;
        if (bullety[i] > player.y) {
          bulletx[i] = player.x + player.width/2;
        }
  
        let collided3 = checkCollision(enemy1, bulletx[i], bullety[i]);
  
        if (collided3) {
          if (ufoDone == false || ufoDone2 == false) {
            if (ufo == true) {
              ufoLives -= 1;
              bulletx[i] = 0;
              bullety[i] = 0;
  
              if (ufoLives == 0) {
                ufoDone = true;
              }
  
              if (ufoLives == 0 && sec30 == true) {
                ufoDone2 = true;
                ufoDone = true;
              }
            }
          }
      }
  
  
  
  
          let collided4 = checkCollision(enemy2, bulletx[i], bullety[i]);
  
          if (collided4) {
              if (ufoDone3 == false) {
                ufoLives2 -= 1;
                bulletx[i] = 0;
                bullety[i] = 0;
  
                if (ufoLives == 0 && sec30 == true) {
                  ufoDone3 = false;
              }
            }
          }
        }
  
      for (var i = 0; i < enbullets + 1; i++) {
        enbullety[i] += 0.01 * enbullety[i] + 0.5;
  
        let collided2 = checkCollision(player, enbulletx[i], enbullety[i]);
  
        if (collided2) {
          gameOver = true;
          if (checker == true || checker == "true") {
            shoot.play();
          }
        }
      }
  
      for (var i = 0; i < bullets2 + 1; i++) {
        bulletx2[i] += 0.01 * bulletx2[i] + 0.5;
  
        let collided2 = checkCollision(player, bulletx2[i], bullety2[i]);
  
        if (collided2) {
          gameOver = true;
          if (checker == true || checker == "true") {
            shoot.play();
          }
        }
      }
  
      for (var i = 0; i < ens; i++) {
        eny[i] += 0.01 * eny[i] + 0.5;
        if (enx[i] > player.x) {
          enx[i] -= 1;
        }
        if (enx[i] < player.x) {
          enx[i] += 1;
        }
  
        let collided1 = checkCollision(player, enx[i], eny[i]);
  
        if (collided1) {
          gameOver = true;
          if (checker == true || checker == "true") {
            shoot.play();
          }
        }
      }
  
      if (Math.floor(Math.random()*100) == 1) {
        makeEnemy1();
      }
  
  
      if (Math.floor(Math.random()*100) == 1 && seconds > 89) {
        makeEnemy2();
      }
  
      for (var i = 0; i < ens1; i++) {
        enx1[i] += 0.01 * enx1[i] + 0.5;
        if (enx1[i] > player.y) {
          eny1[i] -= 1;
        }
        if (enx[i] < player.y) {
          eny1[i] += 1;
        }
  
        let collided1 = checkCollision(player, enx1[i], eny1[i]);
  
        if (collided1) {
          gameOver = true;
          if (checker == true || checker == "true") {
            shoot.play();
          }
        }
      }
  
  
      if (ufo == true) {
        if (enemy1.x > player.x) {
          enemy1.x -= 1;
        }
        if (enemy1.x < player.x) {
          enemy1.x += 1;
        }
      }
  
      if (sec30 == true && ufoDone3 == false) {
        if (enemy2.x > player.x) {
          enemy2.x -= 1.5;
        }
        if (enemy2.x < player.x) {
          enemy2.x += 1.5;
        }
      }
  
      if (sec120 == true) {
        if (enemy3.y > player.y) {
          enemy3.y -= 1.5;
        }
        if (enemy3.y < player.y) {
          enemy3.y += 1.5;
        }
      }
  
      if (sec30 == false && seconds > 29) {
        sec30 = true;
        ufoLives = 3;
        ufoLives2 = 3;
      }
  
  
  
      if (sec30 == true) {
        if (laserCord == undefined) {
          laserCord = Math.floor(Math.random()*700);
          timer4end = Math.floor(Math.random()*700) + 1000;
        }
  
        if (laser1.x > laserCord) {
          laser1.x -= 0.5;
          beaming = false;
        }
        else if (laser1.x < laserCord) {
          laser1.x += 0.5;
          beaming = false;
        }
        else if (laser1.x == laserCord) {
  
          timer4 += 1;
          beaming = true;
          if (timer4 > timer4end) {
            laserCord = undefined;
          }
        }
      }
  
  
      if (sec60 == true) {
        if (laserCord2 == undefined) {
          laserCord2 = Math.floor(Math.random()*700);
          timer5end = Math.floor(Math.random()*700) + 1000;
        }
  
        if (laser2.x > laserCord2) {
          laser2.x -= 0.5;
          beaming2 = false;
          timer6 = 0;
        }
        else if (laser2.x < laserCord2) {
          laser2.x += 0.5;
          beaming2 = false;
          timer6 = 0;
        }
        else if (laser2.x == laserCord2) {
          if (timer6 <= 10000) {
            timer5 += 1;
            beaming2 = true;
            if (timer5 > timer5end) {
              laserCord2 = undefined;
            }
          }
          else {
            timer6 += 1;
            console.log("up");
          }
        }
      }
  
  
  
      let collided5 = checkCollision4(player)
  
      if (collided5) {
        if (beaming == true) {
          gameOver = true;
          if (checker == true || checker == "true") {
            shoot.play();
          }
        }
      }
  
      if (seconds > 59 && sec60 == false) {
        sec60 = true;
        ufoDone2 = false;
        ufoLives = 3;
        ufoDone3 = false;
        ufoLives2 = 3;
        shooter = false;
      }
  
      if (seconds > 89) {
        $("#text").html("You can no longer keep going further, you now have a tiny area to move around.");
        mover = true;
      }
      else if (seconds > 59) {
        $("#text").html("Your spaceship's blasters are jammed. You can no longer shoot.");
      }
      else if (seconds > 29) {
        $("#text").html("More UfOs have apeared, and they brought a laser machine.");
      }
      else if (seconds > 9) {
        $("#text").html("A UFO has apeared out of no where! Use your spaceship's gun to destroy the UFO!");
      }
      else {
        $("#text").html("Asteroids are coming in! Try not to get hit by them.");
      }
  
  
      /*for (var d = 0; i < ens + 1; d++) {
        for (var i = 0; i < bullets + 1; i++) {
          let collided2 = checkCollision2(enx[d], eny[d], bulletx[i], bullety[i]);
  
          if (collided2) {
            enx[d] = 10000000000;
            eny[d] = 10000000000;
  
            bulletx[i] = -10000000000;
            bullety[i] = -10000000000;
          }
        }
      }*/
  
  
      let collided2 = checkCollision3(player, enemy1);
  
      if (collided2) {
        gameOver = true;
        if (checker == true || checker == "true") {
          shoot.play();
        }
      }
  
      let collided7 = checkCollision3(player, enemy2);
  
      if (collided7) {
        gameOver = true;
        if (checker == true || checker == "true") {
          shoot.play();
        }
      }
  
      let collided8 = checkCollision3(player, laser1);
  
      if (collided8) {
        gameOver = true;
        if (checker == true || checker == "true") {
          shoot.play();
        }
      }
  
      let collided9 = checkCollision3(player, laser2);
  
      if (collided9) {
        gameOver = true;
        if (checker == true || checker == "true") {
          shoot.play();
        }
      }
  
  
  
  
      if (seconds > 119 && sec120 == false) {
        sec120 = true;
        console.log("hi");
      }
    }
  
    function makeEnemy1() {
      ens += 1;
      enx[ens] = Math.floor(Math.random()*700);
      eny[ens] = 0;
    }
  
    function makeEnemy2() {
      ens1 += 1;
      eny1[ens] = Math.floor(Math.random()*400);
      enx1[ens] = 0;
    }
  
    function makeBullet() {
      bullets += 1;
      bulletx[bullets] = player.x + 14;
      bullety[bullets] = player.y + 10;
    }
  
    function makeEnBullet() {
      enbullets += 1;
      enbulletx[enbullets] = enemy1.x;
      enbullety[enbullets] = enemy1.y;
    }
  
    function makeBullet2() {
      bullets2 += 1;
      bulletx2[enbullets] = enemy3.x;
      bullety2[enbullets] = enemy3.y;
    }
  
    function make2EnBullet() {
      enbullets += 1;
      enbulletx[enbullets] = enemy2.x;
      enbullety[enbullets] = enemy2.y;
    }
  
    function draw() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      ctx.save();
  
      ctx.fillStyle = "yellow"
  
      for (var i = 0; i < bullets + 1; i++) {
        ctx.fillRect(bulletx[i], bullety[i], 3, 5)
      }
  
      for (var i = 0; i < enbullets + 1; i++) {
        ctx.fillRect(enbulletx[i], enbullety[i], 3, 10)
      }
  
      for (var i = 0; i < bullets2 + 1; i++) {
        ctx.fillRect(bulletx2[i], bullety2[i], 10, 3)
      }
  
      ctx.fillStyle = "gray"
  
      for (var i = 0; i < ens; i++) {
        //ctx.fillRect(enx[i], eny[i], 15, 15)
        ctx.beginPath();
        ctx.arc(enx[i], eny[i], 10, 0, 2 * Math.PI);
        ctx.strokeStyle = 'gray';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'gray';
        ctx.stroke();
      }
  
      for (var i = 0; i < ens1; i++) {
        //ctx.fillRect(enx[i], eny[i], 15, 15)
        ctx.beginPath();
        ctx.arc(enx1[i], eny1[i], 10, 0, 2 * Math.PI);
        ctx.strokeStyle = 'gray';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'gray';
        ctx.stroke();
      }
  
      if (seconds > 9 && ufoDone == false) {
        if (ufoLives == 3) {
          ctx.fillStyle = 'red';
        }
        else if (ufoLives == 2) {
          ctx.fillStyle = 'firebrick';
        }
        else if (ufoLives == 1) {
          ctx.fillStyle = 'darkred';
        }
        ctx.beginPath();
        enemy1.draw();
        if (ufoLives == 3) {
          ctx.strokeStyle = 'red';
        }
        else if (ufoLives == 2) {
          ctx.strokeStyle = "firebrick"
        }
        else if (ufoLives == 1) {
          ctx.strokeStyle = "darkred"
        }
        ctx.fill();
        ctx.lineWidth = 5;
        if (ufoLives == 3) {
          ctx.strokeStyle = 'red';
        }
        else if (ufoLives == 2) {
          ctx.strokeStyle = "firebrick"
        }
        else if (ufoLives == 1) {
          ctx.strokeStyle = "darkred"
        }
        ctx.stroke();
        ufo = true;
      }
      else {
        ufo = false;
      }
  
  
      if (sec30 == true && ufoDone2 == false) {
        if (ufoLives == 3) {
          ctx.fillStyle = 'red';
        }
        else if (ufoLives == 2) {
          ctx.fillStyle = 'firebrick';
        }
        else if (ufoLives == 1) {
          ctx.fillStyle = 'darkred';
        }
        ctx.beginPath();
        enemy1.draw();
        if (ufoLives == 3) {
          ctx.strokeStyle = 'red';
        }
        else if (ufoLives == 2) {
          ctx.strokeStyle = "firebrick"
        }
        else if (ufoLives == 1) {
          ctx.strokeStyle = "darkred"
        }
        ctx.fill();
        ctx.lineWidth = 5;
        if (ufoLives == 3) {
          ctx.strokeStyle = 'red';
        }
        else if (ufoLives == 2) {
          ctx.strokeStyle = "firebrick"
        }
        else if (ufoLives == 1) {
          ctx.strokeStyle = "darkred"
        }
        ctx.stroke();
        ufo = true;
      }
  
      if (sec30 == true && ufoDone3 == false) {
        if (ufoLives2 == 3) {
          ctx.fillStyle = 'red';
        }
        else if (ufoLives2 == 2) {
          ctx.fillStyle = 'firebrick';
        }
        else if (ufoLives2 == 1) {
          ctx.fillStyle = 'darkred';
        }
        ctx.beginPath();
        enemy2.draw();
        if (ufoLives2 == 3) {
          ctx.strokeStyle = 'red';
        }
        else if (ufoLives2 == 2) {
          ctx.strokeStyle = "firebrick"
        }
        else if (ufoLives2 == 1) {
          ctx.strokeStyle = "darkred"
        }
        ctx.fill();
        ctx.lineWidth = 5;
        if (ufoLives2 == 3) {
          ctx.strokeStyle = 'red';
        }
        else if (ufoLives2 == 2) {
          ctx.strokeStyle = "firebrick"
        }
        else if (ufoLives2 == 1) {
          ctx.strokeStyle = "darkred"
        }
        ctx.stroke();
  
        if (ufoLives2 == 0) {
          ufoDone3 = true;
        }
      }
  
  
      if (sec30 == true && laserDone == false) {
        ctx.fillStyle = 'darkblue';
        ctx.beginPath();
        laser1.draw();
        ctx.strokeStyle = 'darkblue';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'darkblue';
        ctx.stroke();
      }
  
      if (laser1.x == laserCord && sec30 == true) {
        //ctx.fillRect(laser1.x - laser1.width/2, laser1.y + laser1.height/2, laser1.width, HEIGHT);
        ctx.fillStyle = 'darkblue';
        laserBeam1.draw();
      }
  
      if (sec60 == true && laserDone2 == false) {
        ctx.fillStyle = 'darkblue';
        ctx.beginPath();
        laser2.draw();
        ctx.strokeStyle = 'darkblue';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'darkblue';
        ctx.stroke();
      }
  
      if (sec120 == true) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        enemy3.draw();
        ctx.strokeStyle = 'red';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'red';
        ctx.stroke();
      }
  
      if (laser2.x == laserCord2 && sec60 == true) {
        ctx.fillStyle = 'darkblue';
        laserBeam2.draw();
      }
  
      ctx.fillStyle = "blue";
      player.draw();
  
      ctx.restore();
    }
  
    // controls for the game
    var keyRightDown = false;
      var keyLeftDown = false;
    var keyUpDown = false;
    var keyDownDown = false;
    var keySpaceDown = false;
          document.onkeydown = function(e) {
              if (e.keyCode == 37 || e.keyCode == 65) {
                  keyLeftDown = true;
              }
              if (e.keyCode == 39 || e.keyCode == 68) {
                  keyRightDown = true;
              }
        if (e.keyCode == 38 || e.keyCode == 87) {
          keyUpDown = true;
        }
        if (e.keyCode == 40 || e.keyCode == 83) {
          keyDownDown = true;
        }
        if (e.keyCode == 32 || e.keyCode == 32) {
            keySpaceDown = true;
        }
          }
          document.onkeyup = function(e) {
              if (e.keyCode == 37 || e.keyCode == 65) {
                  keyLeftDown = false;
              }
              if (e.keyCode == 39 || e.keyCode == 68) {
                  keyRightDown = false;
              }
        if (e.keyCode == 38 || e.keyCode == 87) {
          keyUpDown = false;
        }
        if (e.keyCode == 40 || e.keyCode == 83) {
          keyDownDown = false;
        }
        if (e.keyCode == 32 || e.keyCode == 32) {
          keySpaceDown = false;
        }
          }
    // End of Controls
  
  
    $("#button1").click(function() {
      location.reload();
    });
  
    $("#button2").click(function() {
      check();
      console.log("hi");
    });
  
    startGame();

  