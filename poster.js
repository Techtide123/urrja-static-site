document.addEventListener("DOMContentLoaded", function () {
  // --- HTML elements ---
  const posterElements = `
    <!-- Small fixed image -->
    <img src="assets/img/poster small.jpeg" alt="Poster Thumbnail" class="small-image" id="openBtn">

    <!-- Help bubble on right -->
    <div class="help-text">Our Achievement</div>

    <!-- Fullscreen overlay -->
    <div class="overlay" id="overlay">
        <button class="close-btn" id="closeBtn">✖ Close</button>
        <img src="assets/img/poster.jpeg" alt="Poster Full Image">
    </div>
  `;

  // --- CSS styles ---
  const posterStyles = `
    <style>
      /* Small image button fixed on the left */
      .small-image {
        position: fixed;
        bottom: 100px;
        left: 20px;
        width: 55px;
        height: 80px;
        object-fit: cover;
        cursor: pointer;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        z-index: 1000;
      }

      /* Help bubble on right side of image */
      .help-text {
        position: fixed;
        bottom: 115px; /* align vertically with image */
        left: 85px;    /* to the right of image */
        background: #ffffff;
        color: #333;
        padding: 8px 14px;
        border-radius: 20px;
        font-size: 14px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        white-space: nowrap;
        z-index: 1001;
        cursor: default;
      }

      /* Small triangle pointer */
      .help-text::before {
        content: "";
        position: absolute;
        left: -8px;
        top: 50%;
        transform: translateY(-50%);
        border-width: 8px;
        border-style: solid;
        border-color: transparent #ffffff transparent transparent;
      }

      /* Fullscreen overlay */
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.3s ease, visibility 0.3s;
        z-index: 9999;
      }

      /* Active state shows the overlay */
      .overlay.active {
        visibility: visible;
        opacity: 1;
      }

      /* Full image inside overlay */
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

  // Insert styles into head
  document.head.insertAdjacentHTML("beforeend", posterStyles);

  // Insert HTML elements before .body_wrap (or at start if not present)
  const bodyWrap = document.querySelector(".body_wrap") || document.body;
  bodyWrap.insertAdjacentHTML("beforebegin", posterElements);

  // --- Event Listeners ---
  const openBtn = document.getElementById("openBtn");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");

  openBtn.addEventListener("click", () => {
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });
});
