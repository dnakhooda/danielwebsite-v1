// Events of Buttons
window.onload = function() {
    document.getElementById("home-button-header").onclick = function() {
        window.location.assign("http://www.danielwebsite.com/index.html");
    };
    
    document.getElementById("about-button-header").onclick = function() {
        window.location.assign("http://www.danielwebsite.com/about/about.html");
    };
    
    document.getElementById("games-button-header").onclick = function() {
        window.location.assign("http://www.danielwebsite.com/games/games.html");
    };

    document.getElementById("themes-button-header").onclick = function() {
        window.location.assign("http://www.danielwebsite.com/themes/themes.html");
    };
};
