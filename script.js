function yes() {
    alert("YAYYYY 💖💖 Rendez-vous le 14 février alors !!! 💖✨");
}

function moveNo() {
    const noBtn = document.getElementById("no");

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}
