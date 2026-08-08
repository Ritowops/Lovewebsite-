// Typewriter Message Configuration
const messageText = "Every moment with you is special. Thank you for filling my life with happiness, warmth, and endless smiles. Here are a few of our favorite memories together!";
let index = 0;
const speed = 50; // Typing speed in milliseconds

function typeWriter() {
    const textContainer = document.getElementById("typewriter-text");
    if (textContainer && index < messageText.length) {
        textContainer.innerHTML += messageText.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Start typewriter effect when page loads
window.addEventListener("DOMContentLoaded", typeWriter);

// Audio Toggle Function
function toggleMusic() {
    const music = document.getElementById('bg-music');
    const btn = document.getElementById('music-toggle');

    if (!music) return;

    if (music.paused) {
        music.play().then(() => {
            if (btn) btn.textContent = '⏸️ Pause Music';
        }).catch(err => {
            console.log('Audio playback prevented:', err);
        });
    } else {
        music.pause();
        if (btn) btn.textContent = '🎵 Play Music';
    }
}

// Modal Control Functions
function openSurprise() {
    const modal = document.getElementById('surprise-modal');
    if (modal) {
        modal.style.display = 'flex';
    }

    const music = document.getElementById('bg-music');
    if (music && music.paused) {
        toggleMusic();
    }
}

function closeSurprise() {
    const modal = document.getElementById('surprise-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById('surprise-modal');
    if (event.target === modal) {
        closeSurprise();
    }
});
