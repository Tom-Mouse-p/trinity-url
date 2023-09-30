function logSubmit(event) {
    // log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
    window.location = "/index.html";
    event.preventDefault();
}

const form = document.getElementById("login_form");
// const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);
