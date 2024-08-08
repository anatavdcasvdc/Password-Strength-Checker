const passwordInput = document.getElementById('password');
const progressBar = document.getElementById('progress-bar');
const feedback = document.getElementById('password-feedback');
const commonPasswords = ['password', '123456', 'qwerty', 'admin']; // Example common passwords

function checkPasswordStrength(password) {
  let strength = 0;
  const length = password.length;

  // Check for different character types
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);

  // Check for password length
  if (length >= 8) strength++;

  // Check for character types
  if (hasLower) strength++;
  if (hasUpper) strength++;
  if (hasNumber) strength++;
  if (hasSpecial) strength++;

  // Check for common passwords
  if (!commonPasswords.includes(password)) strength++;

  // Additional complexity checks can be added here (e.g., character repetition, sequence detection)

  return strength;
}

function getStrengthColor(strength) {
  if (strength <= 2) return 'red';
  else if (strength <= 3) return 'orange';
  else return 'green';
}

function getFeedback(strength) {
  switch (strength) {
    case 0:
      return 'Too weak';
    case 1:
      return 'Weak';
    case 2:
      return 'Medium';
    case 3:
      return 'Strong';
    case 4:
      return 'Very strong';
    case 5:
      return 'Excellent';
    default:
      return 'Unknown';
  }
}

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const strength = checkPasswordStrength(password);

  progressBar.style.width = `${strength * 20}%`;
  progressBar.style.backgroundColor = getStrengthColor(strength);
  feedback.textContent = getFeedback(strength);
});
function getFeedback(strength) {
    switch (strength) {
      case 0:
        return "Too short. Use at least 8 characters.";
      case 1:
        return "Weak. Include uppercase, lowercase, numbers, and special characters.";
      case 2:
        return "Medium. Consider adding more character types and increasing length.";
      case 3:
        return "Strong. Good password, but consider adding more complexity.";
      case 4:
        return "Very strong. Excellent password!";
      default:
        return "Unknown";
    }
  }
  