function nextPage() {
    window.location.href = "yesBtn.html";
}

function moveBtn() {
    let x = Math.random() * (window.innerWidth - document.getElementById('noBtn').offsetWidth) - 85;
    let y = Math.random() * (window.innerHeight - document.getElementById('noBtn').offsetHeight) - 48;
    document.getElementById('noBtn').style.left = `${x}px`;
    document.getElementById('noBtn').style.top = `${y}px`;
}