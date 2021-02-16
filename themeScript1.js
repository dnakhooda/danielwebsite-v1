// Set Storage
var danielTheme = localStorage.getItem('danielTheme');
if (!danielTheme || danielTheme == "false") {
    danielTheme = "black";
    localStorage.setItem('danielTheme', danielTheme);
};


// <-------- Set Vars --------> \\

// File location
var url = window.location.pathname;
var filename = url.substring(url. lastIndexOf('/')+1);


// Standard Vars for header
var body = document.body;
var h1s = document.getElementsByTagName("h1");
var h2s = document.getElementsByTagName("h2");
var h3s = document.getElementsByTagName("h3");
var ps = document.getElementsByTagName("p");
var pres = document.getElementsByTagName("pre");
var footers = document.getElementsByTagName("footer");
var buttonHeader = document.getElementsByClassName('button-header');
var header = document.getElementById("main-header");
var bodyDiv = document.getElementById("main-body-div");
var borderDivWeak = document.getElementsByClassName("border-div-weak");
var updateSectionDiv = document.getElementById("updates-section-div");
// Set buttons for Games Var
if (filename == "games.html") var gameButton = document.getElementsByClassName("game-button");
// Set jupiter image Var
if (filename == "about.html") var jupiterImg = document.getElementById("jupiter-img");
// Set Theme Elements
if (filename == "themes.html") {
    var imgsTheme = document.getElementsByClassName("imgs-theme");
    var applyThemeButton = document.getElementsByClassName("apply-theme-button");
};





// <-------- Set Theme Object --------> \\

let setTheme = {
    black: function() {
        // Standard Part of each Page
        if (filename == "index.html" || filename == "") updateSectionDiv.style.width = "80%";
        body.style.backgroundColor = "black";
        header.style.backgroundColor = "black";
        header.style.border = "5px solid #32CD32";
        header.style.borderTop = "0px solid #32CD32";
        bodyDiv.style.backgroundColor = "black";
        for(let i = 0; i < h1s.length; i++) h1s[i].style.color = "#32CD32";
        for(let i = 0; i < h2s.length; i++) h2s[i].style.color = "#32CD32";
        for(let i = 0; i < h3s.length; i++) h3s[i].style.color = "#32CD32";
        for(let i = 0; i < ps.length; i++) ps[i].style.color = "#32CD32";
        for(let i = 0; i < pres.length; i++) pres[i].style.color = "#32CD32";
        for(let i = 0; i < borderDivWeak.length; i++) borderDivWeak[i].style.backgroundColor = "#32CD32";
        for(let i = 0; i < footers.length; i++) {
            footers[i].style.borderLeft = "5px solid #32CD32";
            footers[i].style.borderTop = "5px solid #32CD32";
            footers[i].style.borderright = "5px solid #32CD32";
        };
        for(let i = 0; i < buttonHeader.length; i++) {
            buttonHeader[i].style.backgroundColor = "black";
            buttonHeader[i].style.color = "#32CD32";
        };


        // Change game buttons
        if (filename == "games.html") {
            for(let i = 0; i < gameButton.length; i++) {
                gameButton[i].style.backgroundColor = "black";
                gameButton[i].style.borderColor = "#32CD32";
            };
        };


        // Change image theme borders
        if (filename == "themes.html") {
            for(let i = 0; i < imgsTheme.length; i++) imgsTheme[i].style.borderColor = "#32CD32";
            for(let i = 0; i < applyThemeButton.length; i++) {
                applyThemeButton[i].style.borderColor = "#32CD32";
                applyThemeButton[i].style.backgroundColor = "black";
                applyThemeButton[i].style.color = "#32CD32";
            };
        };


        // Jupiter Image Change
        if (filename == "about.html") jupiterImg.style.border = "none";


        // Set What Theme
        danielTheme = "black";
    },
    blue: function() {
        // Standard Part of each Page
        if (filename == "index.html" || filename == "") updateSectionDiv.style.width = "80%";
        body.style.backgroundColor = "blue";
        header.style.backgroundColor = "blue";
        header.style.border = "5px solid white";
        header.style.borderTop = "0px solid white";
        bodyDiv.style.backgroundColor = "blue";
        for(let i = 0; i < h1s.length; i++) h1s[i].style.color = "white";
        for(let i = 0; i < h2s.length; i++) h2s[i].style.color = "white";
        for(let i = 0; i < h3s.length; i++) h3s[i].style.color = "white";
        for(let i = 0; i < ps.length; i++) ps[i].style.color = "white";
        for(let i = 0; i < pres.length; i++) pres[i].style.color = "white";
        for(let i = 0; i < borderDivWeak.length; i++) borderDivWeak[i].style.backgroundColor = "white";
        for(let i = 0; i < footers.length; i++) {
            footers[i].style.borderLeft = "5px solid white";
            footers[i].style.borderTop = "5px solid white";
            footers[i].style.borderRight = "5px solid white";
        };
        for(let i = 0; i < buttonHeader.length; i++) {
            buttonHeader[i].style.backgroundColor = "blue";
            buttonHeader[i].style.color = "white";
        };


        // Change game buttons
        if (filename == "games.html") {
            for(let i = 0; i < gameButton.length; i++) {
                gameButton[i].style.backgroundColor = "blue";
                gameButton[i].style.borderColor = "white";
            };
        };


        // Change image theme borders
        if (filename == "themes.html") {
            for(let i = 0; i < imgsTheme.length; i++) imgsTheme[i].style.borderColor = "white";
            for(let i = 0; i < applyThemeButton.length; i++) {
                applyThemeButton[i].style.borderColor = "white";
                applyThemeButton[i].style.backgroundColor = "blue";
                applyThemeButton[i].style.color = "white";
            };
        };


        // Jupiter Image Change
        if (filename == "about.html") jupiterImg.style.border = "5px solid white";


        // Set What Theme
        danielTheme = "blue";
    },
    white: function() {
        // Standard Part of each Page
        if (filename == "index.html" || filename == "") updateSectionDiv.style.width = "80%";
        body.style.backgroundColor = "white";
        header.style.backgroundColor = "white";
        header.style.border = "5px solid black";
        header.style.borderTop = "0px solid black";
        bodyDiv.style.backgroundColor = "white";
        for(let i = 0; i < h1s.length; i++) h1s[i].style.color = "black";
        for(let i = 0; i < h2s.length; i++) h2s[i].style.color = "black";
        for(let i = 0; i < h3s.length; i++) h3s[i].style.color = "black";
        for(let i = 0; i < ps.length; i++) ps[i].style.color = "black";
        for(let i = 0; i < borderDivWeak.length; i++) borderDivWeak[i].style.backgroundColor = "black";
        for(let i = 0; i < pres.length; i++) pres[i].style.color = "black";
        for(let i = 0; i < footers.length; i++) {
            footers[i].style.borderLeft = "5px solid black";
            footers[i].style.borderTop = "5px solid black";
            footers[i].style.borderRight = "5px solid black";
        };
        for(let i = 0; i < buttonHeader.length; i++) {
            buttonHeader[i].style.backgroundColor = "white";
            buttonHeader[i].style.color = "black";
        };


        // Change game buttons
        if (filename == "games.html") {
            for(let i = 0; i < gameButton.length; i++) {
                gameButton[i].style.backgroundColor = "white";
                gameButton[i].style.borderColor = "black";
            };
        };


        if (filename == "themes.html") {
            for(let i = 0; i < imgsTheme.length; i++) imgsTheme[i].style.borderColor = "black";
            for(let i = 0; i < applyThemeButton.length; i++) {
                applyThemeButton[i].style.borderColor = "black";
                applyThemeButton[i].style.backgroundColor = "white";
                applyThemeButton[i].style.color = "black";
            };
        };


        // Change image theme borders
        if (filename == "about.html") jupiterImg.style.border = "5px solid black";


        // Set What Theme
        danielTheme = "white";
    }
};


// <------ Set Theme Event -------> \\
function setThemeEvent() {
    if (danielTheme == "black") {setTheme.black();}
    else if (danielTheme == "blue") {setTheme.blue();}
    else if (danielTheme == "white") {setTheme.white();};
};

// Set the storage
function setStorage() {
    localStorage.setItem('danielTheme', danielTheme);
};


// Update Theme
setThemeEvent();


// Update Local Storage
setInterval(function() {
    localStorage.setItem('danielTheme', danielTheme);
}, 100);