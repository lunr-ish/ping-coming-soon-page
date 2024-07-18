const form = document.querySelector("#subscribe-form");
const emailField = form.querySelector("#email");
const errorText = form.querySelector(".error-text");

const EMAIL_REGEX = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailField.value.trim();
  if (email.length > 0) {
    if (EMAIL_REGEX.test(email)) {
      // valid email
      console.log(email);
      form.classList.remove("error");
      emailField.value = "";
    } else {
      // invalid email
      errorText.textContent = "Please provide a valid email address";
      form.classList.add("error");
    }
  } else {
    // empty input
    errorText.textContent =
      "Whoops! It looks like you forgot to add your email";
    form.classList.add("error");
  }
});
