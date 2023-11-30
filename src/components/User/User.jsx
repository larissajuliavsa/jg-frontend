import React, { useEffect, useState } from 'react';
import './User.scss';

function User() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    senha: '',
  });

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem('userData'));
    setUser(storeData);
  }, []);

  function handleChange(e) {
    const { value, name } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  }

  function handleSubmit() {
    setIsDisabled(true);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  return (
    <section className="user">
      <div className="user--align container">
        <h1 className="user__title">Perfil</h1>

        <div className="user__inputs">
          <label htmlFor="name" className="user__label">
            <p>nome</p>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              disabled={isDisabled}
              className={isDisabled ? null : 'edit'}
              value={user.name}
              name="name"
            />
          </label>
          <label htmlFor="username" className="user__label">
            <p>username</p>
            <input
              onChange={handleChange}
              type="text"
              id="username"
              disabled={isDisabled}
              className={isDisabled ? null : 'edit'}
              value={user.username}
              name="username"
            />
          </label>
          <label htmlFor="email" className="user__label">
            <p>email</p>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              disabled={isDisabled}
              className={isDisabled ? null : 'edit'}
              value={user.email}
              name="email"
            />
          </label>
          <label htmlFor="password" className="user__label">
            <p>password</p>
            <input
              onChange={handleChange}
              type="text"
              id="password"
              disabled={isDisabled}
              className={isDisabled ? null : 'edit'}
              value={user.password}
              name="password"
            />
          </label>
        </div>

        <div className="filter__buttons">
          <button
            type="button"
            onClick={() => setIsDisabled(false)}
            className="button--outline"
          >
            editar
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="button--primary"
          >
            salvar
          </button>
        </div>
      </div>
    </section>
  );
}

export default User;
