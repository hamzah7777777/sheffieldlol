const message = document.getElementById('message');

message.addEventListener('click', () => {
  const hue = Math.floor(Math.random() * 360);
  message.style.color = `hsl(${hue}, 80%, 45%)`;
});
