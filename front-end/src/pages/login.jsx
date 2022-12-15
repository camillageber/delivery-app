import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import isLoginValid from '../validations/loginValidation';
import httpRequest from '../axios/config';
import ProductContext from '../context/ProductContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayError, setDisplayError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { loginCount } = useContext(ProductContext);

  useEffect(() => {
    const valid = isLoginValid(email, password);
    setIsButtonDisabled(!valid);
  }, [email, password]);

  const navigate = useNavigate();

  const checkIfTokenExists = () => {
    if (loginCount) return navigate('/customer/products');
  };
  useEffect(() => checkIfTokenExists(), []);
  // const loginSubmit = async (event) => {
  //   event.preventDefault();
  //   httpRequest.post('/login', { email, password })
  //     .then(({ data }) => {
  //       const { authorization, name, role } = data;
  //       localStorage.setItem('user', JSON.stringify({ authorization, name, role }));
  //       navigate('/customer/products');
  //     }).catch((error) => setDisplayError(error.message));
  // };

  const loginSubmit = async (event) => {
    event.preventDefault();
    try {
      await httpRequest.post('/login', { email, password })
        .then(({ data }) => {
          const { token, name, role, id } = data;
          localStorage.setItem('user', JSON.stringify({ token, name, role, email, id }));
          if (role === 'customer') {
            navigate('/customer/products');
          } else {
            navigate('/seller/orders');
          }
        });
    } catch (AxiosError) {
      console.log(AxiosError.response.data.message);
      setDisplayError(AxiosError.response.data.message);
    }
  };

  return (
    <main>
      <header>
        <h1>App de delivery</h1>
      </header>
      <form
        onSubmit={ loginSubmit }
      >
        <label htmlFor="email">
          Login
          <input
            data-testid="common_login__input-email"
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
            data-testid="common_login__input-password"
            type="password"
            id="password"
            placeholder="******"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ isButtonDisabled }
        >
          LOGIN
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
      { displayError
       && (
         <p data-testid="common_login__element-invalid-email">
           { displayError }
         </p>
       ) }
    </main>
  );
}

export default Login;
