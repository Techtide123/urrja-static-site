document.addEventListener("DOMContentLoaded", function () {
  // --- HTML elements ---
  const popupElements = `
    <!-- Fullscreen overlay -->
    <div class="overlay active" id="overlay">
        <button class="close-btn" id="closeBtn">✖ Close</button>
        <img src="assets/img/poster.jpeg" alt="Poster Full Image">
    </div>
  `;

  // --- CSS styles ---
  const popupStyles = `
    <style>
      /* Fullscreen overlay */
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.3s ease, visibility 0.3s;
        z-index: 9999;
      }

      /* Show popup when active */
      .overlay.active {
        visibility: visible;
        opacity: 1;
      }

      /* Full image */
      .overlay img {
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
      }

      /* Close button */
      .close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        background: #fff;
        color: #333;
        border: none;
        padding: 8px 12px;
        cursor: pointer;
        font-size: 16px;
        border-radius: 4px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
      }

      .close-btn:hover {
        background: #f0f0f0;
      }
    </style>
  `;

  // Inject styles into head
  document.head.insertAdjacentHTML("beforeend", popupStyles);

  // Insert popup HTML
  const bodyWrap = document.querySelector(".body_wrap") || document.body;
  bodyWrap.insertAdjacentHTML("beforeend", popupElements);

  // --- Event Listener for closing ---
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");

  // Close popup when clicking button
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  // Also close if clicked outside image
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });
});
