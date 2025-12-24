// SET WAKTU TARGET (UBAH SESUAI MAU KAMU)
const targetTime = new Date("2025-12-25T10:00:00").getTime();

const h = document.getElementById("h");
const m = document.getElementById("m");
const s = document.getElementById("s");

function update() {
  const now = new Date().getTime();
  let diff = Math.floor((targetTime - now) / 1000);

  if (diff <= 0) {
    document.querySelector(".card").innerHTML = `
      <h1>✅ Selesai</h1>
      <p>Website sudah siap</p>
    `;
    clearInterval(timer);
    return;
  }

  const hours = Math.floor(diff / 3600);
  const minutes = Math.floor((diff % 3600) / 60);
  const seconds = diff % 60;

  h.textContent = String(hours).padStart(2, "0");
  m.textContent = String(minutes).padStart(2, "0");
  s.textContent = String(seconds).padStart(2, "0");
}

update();
const timer = setInterval(update, 1000);
