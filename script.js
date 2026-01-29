function yes() {
    alert("YAYYYY 💖💖 Rendez-vous le 14 février alors!!! 🥰");
}

// Bouton non qui s’enfuit
function moveNo() {
    const noBtn = document.getElementById("no");

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Cœurs animés
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Génère des cœurs toutes les 300ms
setInterval(createHeart, 300);
