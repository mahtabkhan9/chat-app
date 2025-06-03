const chatBox = document.getElementById("chatMessages");
const input = document.getElementById("userInput");
const typing = document.getElementById("typingIndicator");

// Send message function
function sendMessage() {
    const text = input.value.trim();
    if (text === "") return;

    addMessage(text, "user");
    input.value = "";

    typing.style.display = "block"; // Show typing animation

    setTimeout(() => {
        typing.style.display = "none";
        const replies = [
            "Hi! How can I help?",
            "Interesting question!",
            "I'm just a bot, but I’ll try my best.",
            "Tell me more.",
            "Can you clarify that?",
            "Avengers Assemble!",
            "That's a great point!",
            "I’m not sure, but I can find out!",
            "Let me think about that.",
            "I love you 3000!"
        ];
        const botReply = replies[Math.floor(Math.random() * replies.length)];
        addMessage(botReply, "bot");
    }, 1200);
}

// Append message to chat box
function addMessage(message, sender) {
    const msg = document.createElement("div");
    msg.className = sender;
    msg.textContent = message;
    chatBox.appendChild(msg);
    msg.scrollIntoView({ behavior: "smooth" });
}

// Send on Enter
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Sidebar collapse
function toggleMenu() {
    const menu = document.getElementById("leftMenu");
    menu.classList.toggle("collapsed");
}
