// Progressive enhancement for the enquiry form. The static fallback stays available.
(function () {
  var form = document.getElementById("enquiry-form");
  if (!form) return;
  var status = document.getElementById("form-status");
  var button = form.querySelector("button[type=submit]");
  // Preselect a service when a visitor arrives from a package-specific CTA.
  try {
    var requestedService = new URLSearchParams(window.location.search).get("service");
    var interest = form.querySelector("select[name=interest]");
    if (requestedService && interest) {
      var wanted = requestedService.toLowerCase();
      Array.prototype.forEach.call(interest.options, function (option) {
        if (option.text.toLowerCase().indexOf(wanted) !== -1 || wanted.indexOf(option.text.toLowerCase().split(" —")[0]) !== -1) {
          interest.value = option.value;
        }
      });
    }
  } catch (ignore) {}
  function show(message, kind) { status.textContent = message; status.className = "form-status " + kind; }
  form.addEventListener("submit", function (event) {
    var action = form.getAttribute("action") || "";
    if (action.indexOf("{{") !== -1 || action.indexOf("YOUR_FORM_ID") !== -1) {
      event.preventDefault();
      show("The online form is not connected yet. Please use the WhatsApp or email contact options on this page.", "err");
      return;
    }
    event.preventDefault();
    button.disabled = true;
    show("Sending your enquiry…", "ok");
    // URL-encoded so the Google Apps Script endpoint can read the fields (e.parameter).
    fetch(action, { method: "POST", body: new URLSearchParams(new FormData(form)) })
      .then(function (response) { if (!response.ok) throw new Error("Request failed"); return response.json(); })
      .then(function (result) { if (!result || !result.ok) throw new Error("Rejected"); form.reset(); show("Enquiry sent. We'll reply using the contact details you provided.", "ok"); })
      .catch(function () { show("Your enquiry did not send. Please try again or use the WhatsApp/email links.", "err"); })
      .then(function () { button.disabled = false; });
  });
})();
