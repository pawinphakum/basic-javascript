
function addTitles() {
    for (var level = 1; level < 7; level++) {
        var title = createTitle(level);
        document.body.appendChild(title);
    }
}

function createTitle(level) {
    var title = document.createElement('h' + level);
    title.innerHTML = 'Title Level ' + level;
    return title;
}

//init
addTitles();