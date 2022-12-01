// regesx de validação de e-mail
const emailRegex = /\S+@\S+\.\S+/;
const six = 6;

function isLoginValid(email, password) {
  const validated = [emailRegex.test(email), password.length >= six];
  return validated.every((value) => value);
}

export default isLoginValid;
