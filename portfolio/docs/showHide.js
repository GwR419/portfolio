/* Gavin Redding
   JavaScript Exercise 1 - showHide.js
   Each button on js-exercise1.html shows or hides the note right after it.
   It also counts how many times any button has been clicked. */

window.addEventListener('DOMContentLoaded', init, false);

let clicks = 0;

/* init() runs once the page has loaded and sets up the click listeners */
function init() {
    let buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', showHide, false);
    }
}

/* showHide() runs when a button is clicked.
   "this" is the button that got clicked, and nextElementSibling is the note div under it. */
function showHide() {
    let note = this.nextElementSibling;
    if (note.style.display == 'block') {
        note.style.display = 'none';
    } else {
        note.style.display = 'block';
    }
    clicks = clicks + 1;
    document.getElementById('counter').innerHTML = clicks;
}
