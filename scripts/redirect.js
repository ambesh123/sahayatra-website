document.addEventListener("DOMContentLoaded", function () {
  // Play Store Link
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.sahayatra.sahayatra";

  // Create popup
  const popup = document.createElement("div");
  popup.className = "redirect-popup";
  popup.innerHTML = `
    <p>You will be redirected to Play Store in <span class="timer">3</span> seconds.</p>
    <button id="cancelRedirect">Cancel</button>
  `;
  document.body.appendChild(popup);

  let countdown = 3;
  const timerEl = popup.querySelector(".timer");
  let interval = setInterval(() => {
    countdown--;
    timerEl.textContent = countdown;
    if (countdown <= 0) {
      clearInterval(interval);
      window.location.href = playStoreLink;
    }
  }, 1000);

  // Cancel button logic
  document.getElementById("cancelRedirect").addEventListener("click", () => {
    clearInterval(interval);
    popup.innerHTML = `<p>Redirect cancelled. <a href="${playStoreLink}" target="_blank">Go manually</a></p>`;
  });
});
