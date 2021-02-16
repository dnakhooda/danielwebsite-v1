$("#theTitle").click(function(event) {
  var answer = prompt("Why did you click me?!");

  if (answer == "Why Not") {
    anyLevel = true;
    localStorage.setItem('anyLevel', anyLevel);
  }
  else if (answer == "RESET") {
    anyLevel = false;
    localStorage.setItem('anyLevel', anyLevel);
  }
  else if (answer == "LEVEL RESET") {
    levelReset = true;
    localStorage.setItem('levelReset', levelReset);
  }
  else {
    alert("That is a bad answer!")
  }
});
