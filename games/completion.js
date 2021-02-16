// Comp Vars
let DotGameComp = localStorage.getItem("DotGameComp");
if (!DotGameComp) {
    DotGameComp = "0";
    localStorage.setItem('DotGameComp', DotGameComp);
};

let aliensComp = localStorage.getItem("aliensComp");
if (!aliensComp) {
    aliensComp = "0";
    localStorage.setItem('aliensComp', aliensComp);
};

let spaceComp = localStorage.getItem("spaceComp");
if (!spaceComp) {
    spaceComp = "0";
    localStorage.setItem('spaceComp', spaceComp);
};



// File location
var url = window.location.pathname;
var filename = url.substring(url. lastIndexOf('/')+1);



setInterval(function(){
    if (filename == "games.html") {
        setGame();
    }
    else if (filename == "Space.html") {
        checkAliens();
    }
    else if (filename == "Dot.html") {
        checkDot();
    }
    else if (filename == "Main.html") {
        checkSpace();
    };
});

function setGame() {
    document.getElementById("Aliens-Completion").innerHTML = aliensComp + "%";
    document.getElementById("Dot-Completion").innerHTML = DotGameComp + "%";
    document.getElementById("Space-Completion").innerHTML = spaceComp + "%";
};

function checkAliens() {
    if (seconds > parseInt(aliensComp) && seconds < 101) {
        aliensComp = seconds;
        localStorage.setItem('aliensComp', aliensComp);
    };
};

function checkDot() {
    if (Level > parseInt(DotGameComp)/10 && Level < 11) {
        DotGameComp = Level * 10;
        localStorage.setItem('DotGameComp', DotGameComp);
    };
};

function checkSpace() {
    if (level > parseInt(spaceComp)/5 && level < 21) {
        spaceComp = level * 5;
        localStorage.setItem('spaceComp', spaceComp);
    };
};