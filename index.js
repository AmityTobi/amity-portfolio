// ── SCROLL REVEAL ──
const items = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.09 },
);
items.forEach((r) => io.observe(r));

// ── FORM REFERENCES ──
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("cf-name");
const emailInput = document.getElementById("cf-email");
const msgInput = document.getElementById("cf-msg");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const msgError = document.getElementById("msg-error");

// ── FORM SUBMIT ──
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  msgError.textContent = "";
  nameInput.classList.remove("input-error");
  emailInput.classList.remove("input-error");
  msgInput.classList.remove("input-error");

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    nameInput.classList.add("input-error");
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    emailInput.classList.add("input-error");
    isValid = false;
  } else if (!emailInput.value.includes("@")) {
    emailError.textContent = "Enter a valid email";
    emailInput.classList.add("input-error");
    isValid = false;
  }

  if (msgInput.value.trim() === "") {
    msgError.textContent = "Message cannot be empty";
    msgInput.classList.add("input-error");
    isValid = false;
  }

  if (isValid) {
    sendMail();
  }
});

// ── SEND EMAIL ──
function sendMail() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = msgInput.value.trim();
  const button = document.querySelector(".cf-btn");

  const params = {
    from_name: name,
    from_email: email,
    message: message,
  };

  button.disabled = true;
  button.textContent = "Sending...";

  emailjs
    .send("service_dq4o3yo", "template_in9zhpd", params)
    .then(() => {
      showToast("Message sent successfully 🚀");
      form.reset();
    })
    .catch(() => {
      showToast("Failed to send message ❌");
    })
    .finally(() => {
      button.disabled = false;
      button.textContent = "Send Message →";
    });
}

// ── TOAST ──
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}
