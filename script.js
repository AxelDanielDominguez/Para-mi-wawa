const messages = [
    "Si wawitaa!❤️",
    "Te amo!❤️",
    "Te adoro mi niño!❤️",
    "Pookie porfavor...❤️",
    "Sabes que lo pienso mi amor❤️",
    "Mi amor realmente te amo uwu<3",
    "JAJA un poco mas bebe animos animos❤️",
    "YA CASIII WAWIIII<3",
    "TE AMUUUU❤️❤️❤️",
    "YA WAWI JAJAJAJ MANDAME CAPTURA Y TE MANDO FOTO CARITA❤️",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}