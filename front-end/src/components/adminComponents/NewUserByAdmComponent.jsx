import React, { useState, useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router';
import isLoginValid from '../../validations/registerValidation';
import httpRequest from '../../axios/config';
import ProductContext from '../../context/ProductContext';

function NewUserByAdmComponent() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [display, setDisplay] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { update, setUpdate } = useContext(ProductContext);

  const roles = ['seller', 'customer'];
  const statusCreated = 201;
  // const navigate = useNavigate();

  const resetState = () => {
    setDisplay('Usuário cadastrado com sucesso!');
    setUserName('');
    setEmail('');
    setPassword('');
    setRole('seller');
    setUpdate(update + 1);
  };

  const admRegisterSubmit = async (e) => {
    e.preventDefault();
    // const { name, email, password, role } = e.target;
    console.log('clicou');
    try {
      await httpRequest.post(
        '/register/adm',
        { name: userName, email, password, role },
        {
          headers: { authorization: JSON.parse(localStorage.getItem('user')).token },
        },
      ).then((response) => {
        if (response.status === statusCreated) {
          resetState();
        }
      });
    } catch (AxiosError) {
      console.log(AxiosError);
      setDisplay(AxiosError.response.data.message);
    }
  };

  const onComboboxChange = ({ target }) => {
    setRole(target.value);
  };

  useEffect(() => {
    const valid = isLoginValid(userName, email, password);
    setIsButtonDisabled(!valid);
  }, [userName, email, password]);

  return (
    <fieldset>
      <h1>Cadastrar novo usuário</h1>
      <form
        onSubmit={ admRegisterSubmit }
      >
        <label htmlFor="name">
          Nome
          <input
            data-testid="admin_manage__input-name"
            id="name"
            type="text"
            placeholder="Nome e sobrenome"
            value={ userName }
            onChange={ ({ target }) => setUserName(target.value) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="admin_manage__input-email"
            id="email"
            type="text"
            placeholder="Seu e-mail@site.com.br"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="admin_manage__input-password"
            id="password"
            type="password"
            placeholder="******"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <label htmlFor="type">
          Tipo
          <select
            data-testid="admin_manage__select-role"
            name="type"
            value={ role }
            onChange={ onComboboxChange }
          >
            {roles.map((el, i) => (
              <option key={ i }>{el}</option>
            ))}
          </select>
        </label>
        <button
          data-testid="admin_manage__button-register"
          type="submit"
          disabled={ isButtonDisabled }
        >
          CADASTRAR
        </button>
      </form>
      {display
        && (
          <p data-testid="admin_manage__element-invalid-register">
            {display}
          </p>
        )}
    </fieldset>
  );
}

export default NewUserByAdmComponent;
