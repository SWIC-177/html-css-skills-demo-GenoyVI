module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
};

// you must implement at least 3️⃣ different JS validations on your form. Whenever there is a violation, the appropriate feedback should be displayed to the user. As soon as the error is corrected, the feedback should disappear.

//added foe education\/
//hh
//yy
//hh
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const email = "test@example.com";
console.log(validateEmail(email)); // Output: true
const validatePassword = (password) => {
  // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return passwordRegex.test(password);
};

const password = "Abc12345";
console.log(validatePassword(password)); // Output: true

const validatePhoneNumber = (phoneNumber) => {
  // Phone number must be in the format XXX-XXX-XXXX
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  return phoneRegex.test(phoneNumber);
};

const phoneNumber = "123-456-7890";
console.log(validatePhoneNumber(phoneNumber)); // Output: true

const validateUsername = (username) => {
  // Username must be alphanumeric and can contain underscores and hyphens
  const usernameRegex = /^[a-zA-Z0-9_-]+$/;
  return usernameRegex.test(username);
};

const username = "john_doe-123";
console.log(validateUsername(username)); // Output: true
