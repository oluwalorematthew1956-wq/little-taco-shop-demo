// =========================================
// Little Taco Shop - Simple JavaScript
// =========================================

// 1. FOOTER YEAR - Auto update
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// 2. OPEN NOW / CLOSED - Based on real time
// Sunday - Thursday: 11am - 9pm (11-21)
// Friday - Saturday: 11am - 11pm (11-23)
const statusEl = document.getElementById("open-status");
if (statusEl) {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 5 = Friday, 6 = Saturday
  const hour = now.getHours();

  let isOpen = false;
  let closeTime = "";

  if (day === 5 || day === 6) {
    // Friday - Saturday
    isOpen = hour >= 11 && hour < 23;
    closeTime = "11pm";
  } else {
    // Sunday - Thursday
    isOpen = hour >= 11 && hour < 21;
    closeTime = "9pm";
  }

  if (isOpen) {
    statusEl.textContent = "🟢 Open Now - Closes at " + closeTime;
    statusEl.style.color = "#16a34a";
    statusEl.style.fontWeight = "700";
  } else {
    statusEl.textContent = "🔴 Closed Now - Opens at 11am";
    statusEl.style.color = "#dc2626";
    statusEl.style.fontWeight = "700";
  }
}

// 3. CONTACT FORM - Check phone before Netlify sends it
const form = document.querySelector('form[name="taco-contact"]');
if (form) {
  form.addEventListener("submit", function (e) {
    const phone = document.getElementById("phone").value.trim();
    // Allow +1, +44, +234, spaces, brackets, dash - at least 7 digits
    const phoneCheck = /^[0-9+\-() ]{7,20}$/;

    if (!phoneCheck.test(phone)) {
      e.preventDefault();
      alert("Please enter a valid phone number, e.g. +1 (512) 555-0134");
      return;
    }
    // If phone is okay, Netlify will send it - no need to block
  });
}

// 4. BACK TO TOP - Smooth
const topLinks = document.querySelectorAll('a[href="#"]');
topLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
