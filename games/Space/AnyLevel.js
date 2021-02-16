var anyLevel = localStorage.getItem('anyLevel');

if (!anyLevel) {
  anyLevel = false;
  localStorage.setItem('anyLevel', anyLevel);
}

var levelReset = localStorage.getItem('levelReset');

if (!levelReset) {
  levelReset = false;
  localStorage.setItem('levelReset', levelReset);
}
