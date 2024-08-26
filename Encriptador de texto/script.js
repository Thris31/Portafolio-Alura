// Definición de las reglas de encriptación y desencriptación
const encryptionRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const decryptionRules = Object.fromEntries(
    Object.entries(encryptionRules).map(([key, value]) => [value, key])
);

function handleResize() {
    const isSmallScreen = window.innerWidth <= 768;
    const placeholderImage = document.getElementById('placeholderImage');
    const outputContainer = document.getElementById('output-container');
    
    if (isSmallScreen) {
        outputContainer.style.display = 'block';
        placeholderImage.style.display = 'none';
    } else {
        outputContainer.style.display = 'none';
        placeholderImage.style.display = 'block';
    }
}

window.addEventListener('resize', handleResize);
handleResize();

function isValidInput(text) {
    return /^[a-z\s]+$/.test(text); // Permitir letras minúsculas y espacios
}

function processText(action) {
    const inputText = document.getElementById('inputText').value;
    const errorMessage = document.getElementById('error-message');
    const emptyTextMessage = document.getElementById('empty-text-message');
    const outputContainer = document.getElementById('output-container');
    const placeholderImage = document.getElementById('placeholderImage');
    const copyButton = document.getElementById('copyButton');
    const smoke = document.getElementById('smoke');

    if (inputText.trim() === '') {
        emptyTextMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        document.getElementById('outputText').value = '';
        outputContainer.style.display = 'none';
        placeholderImage.style.display = 'block';
        copyButton.style.display = 'none';
        return;
    } else {
        emptyTextMessage.style.display = 'none';
    }

    if (!isValidInput(inputText)) {
        errorMessage.textContent = 'Solo se permite letras minúsculas y espacios.';
        errorMessage.style.display = 'block';
        document.getElementById('outputText').value = '';
        outputContainer.style.display = 'none';
        placeholderImage.style.display = 'block';
        copyButton.style.display = 'none';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    let resultText = '';

    if (action === 'encrypt') {
        resultText = inputText.split('').map(char => encryptionRules[char] || char).join('');
    } else if (action === 'decrypt') {
        let tempText = inputText;
        for (const [key, value] of Object.entries(decryptionRules)) {
            tempText = tempText.split(key).join(value);
        }
        resultText = tempText;
    }

    document.getElementById('outputText').value = resultText;

    if (resultText.trim() === '') {
        outputContainer.style.display = 'none';
        placeholderImage.style.display = 'block';
        copyButton.style.display = 'none';
    } else {
        placeholderImage.classList.add('rotate');
        smoke.classList.add('show-smoke');

        setTimeout(() => {
            outputContainer.style.display = 'flex';
            copyButton.style.display = 'block';
            placeholderImage.classList.remove('rotate');
            smoke.classList.remove('show-smoke');
        }, 1500);
    }
}

function clearText() {
    const placeholderImage = document.getElementById('placeholderImage');
    const smoke = document.getElementById('smoke');

    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('empty-text-message').style.display = 'none';
    document.getElementById('output-container').style.display = 'none';
    document.getElementById('copyButton').style.display = 'none';

    // Añadir clases para la animación de aparición en humo
    smoke.classList.add('show-smoke');
    placeholderImage.style.display = 'block';
    placeholderImage.classList.add('appear');

    setTimeout(() => {
        smoke.classList.remove('show-smoke');
        placeholderImage.classList.remove('appear');
    }, 1000);
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
}

// Manejo del cambio de tema
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('themeSwitch');
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }
    
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});