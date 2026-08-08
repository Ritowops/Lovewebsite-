// Letter Content
const text = `My Beautiful Ghadii ❤️,

From the day you entered my life,
you became the owner of my heart.

Lately you may have noticed a change in my behaviour.
Please never think my love has become less.

I only wanted to see whether my love had changed you...

And today I know...

Yes, it has.

You love me more every single day,
and seeing that fills my heart with happiness.

You are my Queen 👑,
my peace,
my smile,
and my forever.

No matter what happens,
I will always choose you.

I love you today,
tomorrow,
and forever.

Forever Yours,

❤️ Ritow (Your Ghadedaa)`;

let i = 0;
const speed = 45;
let isTyping = false;

// Function to handle Typewriter Animation
function typeWriter() {
    const target = document.getElementById("typewriter");
    if (!target) return;

    target.innerHTML = "";
    const textSpan = document.createElement("span");
    const cursorSpan = document.createElement("span");
    cursorSpan.className = "cursor";

    target.appendChild(textSpan);
    target.appendChild(cursorSpan);

    function typeNextChar() {
        if (i < text.length) {
            textSpan.textContent += text.charAt(i);
            i++;
            setTimeout(typeNextChar, speed);
        }
    }

    typeNextChar();
}

// Function to Open the Main Letter
function openLetter() {
    const letter = document.getElementById("letter");
    const openBtn = document.getElementById("openBtn");

    if (letter) {
        letter.style.display = "block";
        
        if (openBtn) openBtn.style.display = "none";

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

        if (!isTyping) {
            isTyping = true;
            typeWriter();
        }

        // Play music automatically when letter opens
        const music = document.getElementById("bgMusic");
        if (music && music.paused) {
            toggleMusic();
        }
    }
}

// Function to Toggle Background Music Play/Pause
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    if (!music) return;

    if (music.paused) {
        music.play().then(() => {
            if (musicBtn) musicBtn.textContent = "⏸️ Pause Music";
        }).catch((err) => {
            console.log("Audio play blocked by browser:", err);
        });
    } else {
        music.pause();
        if (musicBtn) musicBtn.textContent = "🎵 Play Music";
    }
}

// Function to Open the Final Surprise & Trigger Floating Heart Burst
function openSurprise() {
    const message = document.getElementById("surpriseMessage");

    if (message) {
        message.classList.add("show");
        message.style.display = "block";

        // Create 15 floating hearts across the screen
        for (let i = 0; i < 15; i++) {
            createSurpriseHeart();
        }

        setTimeout(() => {
            message.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 200);
    }
}

// Helper Function to Create Animated Floating Hearts
function createSurpriseHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translateY(0) scale(0.5)",
                opacity: 0
            },
            {
                transform: "translateY(-40vh) scale(1)",
                opacity: 1
            },
            {
                transform: "translateY(-100vh) scale(1.3)",
                opacity: 0
            }
        ],
        {
            duration: 3000 + Math.random() * 2000,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, 5000);
}