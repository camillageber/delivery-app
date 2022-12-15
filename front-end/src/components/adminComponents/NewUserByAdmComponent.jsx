import React from 'react';

function NewUserByAdmComponent() {
  return (
    <form>
      <h1>Cadastrar novo usuário</h1>
      <label htmlFor="name">
        Nome
        <input
          data-testid="admin_manage__input-name"
          id="name"
          type="text"
          placeholder="Nome e sobrenome"
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          data-testid="admin_manage__input-email"
          id="email"
          type="text"
          placeholder="Seu e-mail@site.com.br"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          data-testid="admin_manage__input-password"
          id="password"
          type="password"
          placeholder="******"
        />
      </label>
      <label htmlFor="type">
        Tipo
        <select
          data-testid="admin_manage__select-role"
          name="type"
        >
          <option>Vendedor</option>
          <option>Cliente</option>
        </select>
      </label>
      <button
        data-testid="admin_manage__button-register"
        type="button"
      >
        CADASTRAR
      </button>
    </form>
  );
}

export default NewUserByAdmComponent;
