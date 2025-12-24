 // Reasons database
 const reasons = [
    { 
        text: "You’re ridiculously amazing, and somehow I got lucky enough to call you mine. 💖", 
        emoji: "🌟",
        gif: "gif1.gif"
    },
    { 
        text:  "May your day be full of laughter, love, and just enough cake to make life perfect. 🌸 ", 
        emoji: "💗",
        gif: "gif2.gif"
    },
    { 
        text: "Wishing you all the happiness, success, and dreams your heart secretly wishes for… and maybe a few surprises too ✨ ", 
        emoji: "💕",
        gif: "gif1.gif"
    },
    { 
        text: "Stay the amazing, slightly dramatic, and unbelievably cute girl you are—keep shining and annoying me in the best way possible  🥳 ", 
        emoji: "🌟",
        gif: "gif2.gif"
    }
];

// State management
let currentReasonIndex = 0;
const reasonsContainer = document.getElementById('reasons-container');
const shuffleButton = document.querySelector('.shuffle-button');
const reasonCounter = document.querySelector('.reason-counter');
let isTransitioning = false;

// Create reason card with gif
function createReasonCard(reason) {
    const card = document.createElement('div');
    card.className = 'reason-card';
    
    const text = document.createElement('div');
    text.className = 'reason-text';
    text.innerHTML = `${reason.emoji} ${reason.text}`;
    
    const gifOverlay = document.createElement('div');
    gifOverlay.className = 'gif-overlay';
    gifOverlay.innerHTML = `<img src="${reason.gif}" alt="Friendship Memory">`;
    
    card.appendChild(text);
    card.appendChild(gifOverlay);
    
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "back.out"
    });

    return card;
}

// Display new reason
function displayNewReason() {
    if (isTransitioning) return;
    isTransitioning = true;

    if (currentReasonIndex < reasons.length) {
        const card = createReasonCard(reasons[currentReasonIndex]);
        reasonsContainer.appendChild(card);
        
        // Update counter
        reasonCounter.textContent = `Reason ${currentReasonIndex + 1} of ${reasons.length}`;
        
        currentReasonIndex++;

        // Check if we should transform the button
        if (currentReasonIndex === reasons.length) {
            gsap.to(shuffleButton, {
                scale: 1.1,
                duration: 0.5,
                ease: "elastic.out",
                onComplete: () => {
                    shuffleButton.textContent = "Tekan disini sayangku💫";
                    shuffleButton.classList.add('story-mode');
                    shuffleButton.addEventListener('click', () => {
                        gsap.to('body', {
                            opacity: 0,
                            duration: 1,
                            onComplete: () => {
                                window.location.href = 'last.html'; // Replace with the actual URL of the next page
                            }
                        });
                    });
                }
            });
        }

        // Create floating elements
        createFloatingElement();
        
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    } else {
        // Handle navigation to new page or section
        window.location.href = "#storylane";
        // Or trigger your next page functionality
    }
}

// Initialize button click
shuffleButton.addEventListener('click', () => {
    gsap.to(shuffleButton, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });
    displayNewReason();
});

// Floating elements function (same as before)
function createFloatingElement() {
    const elements = ['🌸', '✨', '💖', '🦋', '⭐'];
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = Math.random() * window.innerHeight + 'px';
    element.style.fontSize = (Math.random() * 20 + 10) + 'px';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -500,
        duration: Math.random() * 10 + 10,
        opacity: 0,
        onComplete: () => element.remove()
    });
}

// Custom cursor (same as before)
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.2
    });
});

// Create initial floating elements
setInterval(createFloatingElement, 2000);

    function updateAgeTracker() {
        const birthDate = new Date("2004-12-25T00:00:00");
        const now = new Date();

        let diff = now - birthDate;

        let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        diff -= years * (1000 * 60 * 60 * 24 * 365.25);

        let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
        diff -= months * (1000 * 60 * 60 * 24 * 30.44);

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -= days * (1000 * 60 * 60 * 24);

        let hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);

        let minutes = Math.floor(diff / (1000 * 60));
        diff -= minutes * (1000 * 60);

        let seconds = Math.floor(diff / 1000);

        // Build heart elements
        const html = `
            <div class="heart beat">❤️ <span>${years}</span> Years</div>
            <div class="heart beat">❤️ <span>${months}</span> Months</div>
            <div class="heart beat">❤️ <span>${days}</span> Days</div>
            <div class="heart beat">❤️ <span>${hours}</span> Hours</div>
            <div class="heart beat">❤️ <span>${minutes}</span> Minutes</div>
            <div class="heart beat">❤️ <span>${seconds}</span> Seconds</div>
        `;

        document.getElementById("countdown").innerHTML = html;
    }

    setInterval(updateAgeTracker, 1000);
    updateAgeTracker();
