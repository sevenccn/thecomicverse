document.addEventListener('DOMContentLoaded', () => {
    const formModal = document.getElementById("formModal");
    const successModal = document.getElementById("successModal");
    const registerButton = document.getElementById("registerButton");
    const closeButtons = document.getElementsByClassName("close");

    registerButton.onclick = function() {
        formModal.style.display = "block";
    }

    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            formModal.style.display = "none";
            successModal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == formModal || event.target == successModal) {
            formModal.style.display = "none";
            successModal.style.display = "none";
        }
    }

    const form = document.getElementById("registrationForm");
    form.onsubmit = function(event) {
        event.preventDefault();
        formModal.style.display = "none";
        successModal.style.display = "block";
    }

    // Timer functionality
    const countdown = () => {
        const eventDate = new Date('June 28, 2024 09:00:00').getTime();
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').innerHTML = "The event has started!";
        }
    }

    const timerInterval = setInterval(countdown, 1000);
});

