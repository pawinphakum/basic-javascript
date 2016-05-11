
function addTitles() {
    for (var level = 1; level < 7; level++) {
        var text = 'Title Level' + level;
        var title = createTitle(level, text);
        document.body.appendChild(title);
    }
}

function createTitle(level, text) {
    var title = document.createElement('h' + level);
    title.innerHTML = text;
    return title;
}

//init
addTitles();