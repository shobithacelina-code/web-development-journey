function greetUser() {
    const name = document.getElementById("nameInput").value;

    const greeting = document.getElementById("greeting");

    if (name.trim() === "") {
        greeting.textContent = "Please enter your name 😊";
    } else {
        greeting.textContent = `Hello, ${name}! Welcome to my JavaScript journey 🚀`;
    }
}
