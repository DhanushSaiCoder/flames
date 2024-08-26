var boy;
var girl;
var boyy, girll;
var remaining;
var flamesOriginal = ['f', 'l', 'a', 'm', 'e', 's'];
var relationships = {
    'f': 'FRIEND 😀',
    'l': 'LOVE 😍',
    'a': 'AFFECTION 🥰',
    'm': 'MARRIAGE 🤩',
    'e': 'ENEMY😈',
    's': 'SIBLING🫂'
};

document.getElementById('result').style.display = 'none';

function start() {
    boy = document.getElementById('boyInp').value.trim();
    girl = document.getElementById('girlInp').value.trim();

    if (!boy || !girl) {
        alert("Please enter both names.");
        clearInputs();
        return;
    }

    if (boy.toLowerCase() === girl.toLowerCase()) {
        alert("Both names are the same. Please enter different names.");
        clearInputs();
        return;
    }

    boyy = boy;
    girll = girl;
    boy = boy.toLowerCase();
    girl = girl.toLowerCase();
    remaining = count(boy, girl);

    findAns(remaining);
    revealAnswer();
}

function clearInputs() {
    document.getElementById('boyInp').value = '';
    document.getElementById('girlInp').value = '';
}

function revealAnswer() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('result').style.display = 'flex';
    document.getElementById('boyTxt').innerText = boyy;
    document.getElementById('girlTxt').innerText = girll;
}

function findAns(r) {
    let flames = [...flamesOriginal]; // Reset FLAMES array each time
    let curr = 0;
    while (flames.length > 1) {
        curr = (curr + r - 1) % flames.length;
        flames.splice(curr, 1);
    }
    let finalResult = flames[0].toUpperCase();
    document.getElementById('relTxt').innerText = finalResult;
    document.getElementById('relTxt').innerText = relationships[finalResult.toLowerCase()];
}

function count(b, g) {
    boy = removeSpaces(b);
    girl = removeSpaces(g);

    for (var i = 0; i < boy.length; i++) {
        for (var j = 0; j < girl.length; j++) {
            if (boy[i] === girl[j]) {
                boy = boy.slice(0, i) + boy.slice(i + 1);
                girl = girl.slice(0, j) + girl.slice(j + 1);
                i--;
                break;
            }
        }
    }

    return boy.length + girl.length;
}

function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}