
let joined = 0;
let maxSlots = 48;
let countdown = 0;
let timerEl = document.getElementById("timer");
let statusEl = document.getElementById("status");
let roomEl = document.getElementById("room");
let roomIdEl = document.getElementById("roomId");
let roomPassEl = document.getElementById("roomPass");
let interval;

// join slot function
function joinSlot() {
  if (joined < maxSlots) {
    joined++;
    document.getElementById("joined").textContent = joined;
  } else {
    alert("Slots full!");
  }
}

// start match function (admin)
function startMatch() {
  countdown = parseInt(document.getElementById("adminCountdown").value);
  let roomId = document.getElementById("adminRoomId").value || "12345";
  let roomPass = document.getElementById("adminRoomPass").value || "ABCD";
  roomIdEl.textContent = roomId;
  roomPassEl.textContent = roomPass;
  statusEl.textContent = "Upcoming";

  if (interval) clearInterval(interval);
  interval = setInterval(() => {
    if (countdown > 0) {
      let minutes = Math.floor(countdown / 60);
      let seconds = countdown % 60;
      timerEl.textContent = `Match starts in: ${minutes}:${seconds.toString().padStart(2, '0')}`;
      countdown--;
    } else {
      clearInterval(interval);
      timerEl.textContent = "Match Started!";
      statusEl.textContent = "LIVE 🔴";
      roomEl.style.display = "block";
      setTimeout(() => {
        statusEl.textContent = "Game Over";
      }, 15000); // 15s later game over
    }
  }, 1000);
}
