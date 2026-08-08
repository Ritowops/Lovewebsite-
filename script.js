// Function to toggle play/pause for background music
function toggleMusic() {
    const music = document.getElementById('bg-music');
    const btn = document.getElementById('music-toggle');

    if (!music) return;

    if (music.paused) {
        music.play().then(() => {
            if (btn) btn.textContent = '⏸️ Pause Music';
        }).catch(err => {
            console.log('Audio playback prevented by browser:', err);
        });
    } else {
        music.pause();
        if (btn) btn.textContent = '🎵 Play Music';
    }
}

// Function to open the surprise modal and auto-play music on user interaction
function openSurprise() {
    const modal = document.getElementById('surprise-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }

    // Trigger audio on button click to satisfy mobile browser autoplay policies
    const music = document.getElementById('bg-music');
    if (music && music.paused) {
        toggleMusic();
    }
}

// Function to close the surprise modal
function closeSurprise() {
    const modal = document.getElementById('surprise-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Close modal when clicking anywhere outside of the modal content card
window.addEventListener('click', function(event) {
    const modal = document.getElementById('surprise-modal');
    if (event.target === modal) {
        closeSurprise();
    }
});
