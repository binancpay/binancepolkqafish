function openModal() {
  const saved = JSON.parse(localStorage.getItem("adminSettings"));
  const modalText = document.getElementById("modal-text");

  if (saved) {
    modalText.innerHTML = `
      <div style="text-align: center; font-size: 15px; line-height: 1.6;">
        <b  style="font-size: 16px; color: #white;">Xurmatli!  ${saved.username || "Foydalanuvchi"}</b><br>
        Birjadan mablag' yechib olish jarayonida xatolik yuz berdi.<br>

        <div style="color: #c41a1aff;">
          ${saved.extra || ""}
        </div><br>
        Karta raqam: <b>${saved.card || "0000 0000 0000 0000"}</b><br>
        <span style="font-size: 14px; color: #64748b;">Hurmat bilan, OKX ma’muriyati.</span>
      </div>
    `;

  } else {
    modalText.innerText = "Admin sozlamalari topilmadi.";
  }

  document.getElementById("errorModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("errorModal").style.display = "none";
}

function startCountdown(seconds) {
    const countdownEl = document.getElementById("countdown");
    let remaining = seconds;

    const interval = setInterval(() => {
        let h = Math.floor(remaining / 3600);
        let m = Math.floor((remaining % 3600) / 60);
        let s = remaining % 60;

        countdownEl.innerHTML = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

        if (remaining <= 0) {
            clearInterval(interval);
            countdownEl.innerHTML = "<span style='color:red;'>⏱ Vaqt tugadi</span>";
        }

        remaining--;
    }, 1000);
}

window.addEventListener("load", function () {
    const saved = JSON.parse(localStorage.getItem("adminSettings"));
    if (saved) {
        document.getElementById("profile-name").textContent = saved.name || "Foydalanuvchi";
        document.getElementById("profile-image").src = saved.avatar || "img/fallback.png";
    }
});
window.addEventListener("load", function () {
  const saved = JSON.parse(localStorage.getItem("adminSettings"));
  if (saved) {
    document.getElementById("profile-name").textContent = saved.name || "Foydalanuvchi";
    document.getElementById("profile-image").src = saved.avatar || "img/fallback.png";
  }
});

