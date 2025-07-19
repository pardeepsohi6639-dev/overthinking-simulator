const messages = [
  "Did you forget to reply to that message?",
  "Was that thing you said 3 years ago weird?",
  "Why did they stop typing?",
  "Did your friend actually mean that compliment?",
  "What if you left the stove on?",
  "Why did you wave like that?",
  "Do you even walk normally?",
  "What if your boss hates you?",
  "Are you overthinking this simulator?"
];

function showMessage() {
  const message = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("message").innerText = message;
}
