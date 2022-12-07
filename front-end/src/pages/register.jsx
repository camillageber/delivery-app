import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import isLoginValid from '../validations/registerValidation';
import httpRequest from '../axios/config';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [displayError, setDisplayError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const valid = isLoginValid(userName, email, password);
    setIsButtonDisabled(!valid);
  }, [userName, email, password]);

  const navigate = useNavigate();

  const registerSubmit = async (event) => {
    event.preventDefault();
    try {
      await httpRequest.post('/register', { name: userName, email, password })
        .then(({ data }) => {
          const { token, name, role } = data;
          localStorage.setItem('user', JSON.stringify({ token, name, role, email }));
          navigate('/customer/products');
        });
    } catch (AxiosError) {
      console.log(AxiosError);
      setDisplayError(AxiosError.response.data.message);
    }
  };

  return (
    <main>
      <header>
        <h1>Cadastro</h1>
      </header>
      <form
        onSubmit={ registerSubmit }
      >
        <label htmlFor="name">
          Nome
          <input
            data-testid="common_register__input-name"
            type="text"
            id="name"
            placeholder="Seu nome"
            value={ userName }
            onChange={ ({ target }) => setUserName(target.value) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="common_register__input-email"
            type="email"
            id="email"
            placeholder="email@trybeer.com.br"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="common_register__input-password"
            type="password"
            id="password"
            placeholder="******"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ isButtonDisabled }
        >
          CADASTRAR
        </button>
      </form>
      { displayError
       && (
         <p data-testid="common_register__element-invalid_register">
           { displayError }
         </p>
       ) }
    </main>
  );
}

export default Register;
