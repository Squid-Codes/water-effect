let range = document.getElementById('range');
let value = document.getElementById('value');
let r = document.querySelector(':root');

function rangeInput() {
    let progress = (90 + 11 - range.value) + '%';
    let percentage = Math.floor(((range.value - 11) / 79) * 100) + '%';
    value.innerText = percentage;
    r.style.setProperty('--progress', `${range.value}%`);
}

range.value = 0;
rangeInput();

range.oninput = () => {
    rangeInput();
}