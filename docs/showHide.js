/* Gavin Redding
   JavaScript Exercise 1
   Clicking a button shows or hides the note under it. */

window.addEventListener('DOMContentLoaded', init, false);

function init() {
    let buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', showHide, false);
    }
}

function showHide() {
    let note = this.nextElementSibling;
    if (note.style.display == 'block') {
        note.style.display = 'none';
    } else {
        note.style.display = 'block';
    }
}
