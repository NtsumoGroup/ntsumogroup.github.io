// Contact form: sends the enquiry to Formspree without leaving the page.
(function () {
  var form = document.getElementById("enquiry-form");
  if (!form) return;
  var status = document.getElementById("form-status");
  var button = form.querySelector("button[type=submit]");

  function show(message, kind) {
    status.textContent = message;
    status.className = "form-status " + kind;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var action = form.getAttribute("action") || "";
    if (action.indexOf("{{") !== -1) {
      show("This form is not connected yet. Please use the email or WhatsApp link on this page.", "err");
      return;
    }
    button.disabled = true;
    show("Sending your request...", "ok");
    fetch(action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then(function (response) {
        if (!response.ok) throw new Error("Request failed");
        form.reset();
        show("Request sent. We will reply by email or WhatsApp.", "ok");
      })
      .catch(function () {
        show("Your request did not send. Check your connection and try again, or use the email link on this page.", "err");
      })
      .then(function () {
        button.disabled = false;
      });
  });
})();
