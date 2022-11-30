// regesx de validação de e-mail
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const six = 6;

function isLoginValid(email, password) {
  const validated = [emailRegex.test(email), password.length >= six];
  return validated.every((value) => value);
}

export default isLoginValid;
