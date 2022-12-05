// regesx de validação de e-mail
const emailRegex = /\S+@\S+\.\S+/;
const six = 6;
const twelve = 12;

function isLoginValid(name, email, password) {
  const validated = [
    name.length >= twelve,
    emailRegex.test(email),
    password.length >= six,
  ];
  return validated.every((value) => value);
}

export default isLoginValid;
