// Formspree submission
const form = document.getElementById("enquiryForm");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function(e) {
  e.preventDefault();
  const data = new FormData(form);
  try {
    const res = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      status.textContent = "✅ Thanks — your enquiry has been sent!";
      form.reset();
      setTimeout(() => { status.textContent = ""; }, 4000);
    } else {
      status.textContent = "❌ Oops, something went wrong. Try again.";
    }
  } catch {
    status.textContent = "❌ Network error. Please retry.";
  }
});
