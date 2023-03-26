const captcha = document.getElementById('captcha');
const captchaInput = document.getElementById('captcha-input');
const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const captchaLength = 6;
let captchaText = '';

for (let i = 0; i < captchaLength; i++) {
  captchaText += characters.charAt(
    Math.floor(Math.random() * characters.length)
  );
}

captcha.textContent = captchaText;

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (captchaInput.value === captchaText) {
    alert('Form submitted successfully!');
  } else {
    alert('Invalid captcha, please try again.');
    captchaText = '';
    for (let i = 0; i < captchaLength; i++) {
      captchaText += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    captcha.textContent = captchaText;
  }
});

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
