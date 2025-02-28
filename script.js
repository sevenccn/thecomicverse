document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
    const endDate = new Date("June 28, 2040 09:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("timer").innerText = "Event Started!";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // Chat Box
    const chatButton = document.getElementById('chat');
    const chatBox = document.getElementById('chat-box');
    const sendButton = document.getElementById('send-button');
    const chatInput = document.getElementById('chat-input');
    const messagesContainer = chatBox.querySelector('.messages');

    chatButton.addEventListener('click', function() {
        chatBox.style.display = 'block';
    });

    sendButton.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage('user', message);
            chatInput.value = '';
            setTimeout(() => {
                addMessage('bot', 'Hello! How can I help you?');
            }, 500);
        }
    });

    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });

    function addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');

        const profilePicture = document.createElement('img');
        profilePicture.src = sender === 'user' ? 'user-profile.png' : 'bot-profile.png';
        messageElement.appendChild(profilePicture);

        const textElement = document.createElement('div');
        textElement.classList.add('text');
        textElement.textContent = text;
        messageElement.appendChild(textElement);

        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Workshop Registration Form
    const workshopForm = document.querySelector('form');

    workshopForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        alert("Registration successful! You will be notified 15 minutes before the start of the workshop.");
    });

    // Notify before workshop starts
    const workshopStartDate = new Date("June 28, 2024 09:00:00").getTime();
    const notifyTime = workshopStartDate - (15 * 60 * 1000); // 15 minutes before start

    setTimeout(function() {
        alert("Workshop will start in 15 minutes!");
    }, notifyTime - Date.now());
});

