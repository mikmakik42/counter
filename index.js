let counter = 0;
const el = {
    display: document.getElementById('display'),
    add: document.getElementById('add'),
    soustract: document.getElementById('soustract'),
}

el.soustract.addEventListener('click', () => updateCounter(-1))

el.add.addEventListener('click', () => updateCounter(+1))

function updateCounter(value) {
    if (counter + value >= 0) {
        counter += value;
    }
    el.display.textContent = counter;
}