document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('lead-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const postalCode = document.getElementById('postal-code').value;

            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone:', phone);
            console.log('Postal Code:', postalCode);

            form.reset();
        });
    }
});

let isBackgroundSet = false;
let isBorderAndOutlineSet = false;
let isListStyleChanged = false;
let isMarginAndPaddingSet = false;
let isTextPropertiesSet = false;

function setBackground() {
    const form = document.getElementById('lead-form');
    if (!isBackgroundSet) {
        form.style.background = '#b0b0b0';
        isBackgroundSet = true;
    } else {
        form.style.background = '';
        isBackgroundSet = false;
    }
}

function setBorderAndOutline() {
    const form = document.getElementById('lead-form');
    if (!isBorderAndOutlineSet) {
        form.style.border = '5px solid #b0b0b0';
        form.style.outline = '3px dashed #ffffff';
        isBorderAndOutlineSet = true;
    } else {
        form.style.border = '';
        form.style.outline = '';
        isBorderAndOutlineSet = false;
    }
}

function changeListStyle() {
    const list = document.getElementById('feature-list');
    if (!isListStyleChanged) {
        list.style.listStyle = 'number';
        isListStyleChanged = true;
    } else {
        list.style.listStyle = '';
        isListStyleChanged = false;
    }
}

function setMarginAndPadding() {
    const form = document.getElementById('lead-form');
    if (!isMarginAndPaddingSet) {
        form.style.margin = '30px';
        form.style.padding = '20px';
        isMarginAndPaddingSet = true;
    } else {
        form.style.margin = '';
        form.style.padding = '';
        isMarginAndPaddingSet = false;
    }
}

function setTextProperties() {
    const form = document.getElementById('lead-form');
    if (!isTextPropertiesSet) {
        form.style.color = '#ffffff';
        form.style.fontFamily = 'Verdana, sans-serif';
        form.style.fontSize = '20px';
        isTextPropertiesSet = true;
    } else {
        form.style.color = '';
        form.style.fontFamily = '';
        form.style.fontSize = '';
        isTextPropertiesSet = false;
    }
}
