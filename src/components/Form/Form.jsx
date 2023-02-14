import { useState } from "react";
import style from "./Form.module.css";
import validations from "./validations";

export default function Form({valiDated}) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    password: "",
  });
  const handleInput = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
    setError(
      validations({
        ...form,
        [evt.target.name]: evt.target.value,
      })
    );
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setForm({
      username: "",
      password: "",
    });
    valiDated(form)
    setError({
      username: "",
      password: "",
    });
  };
  return (
    <div className={style.form}>
      <h3>LOGIN</h3>
      <div className={style.datos_correctos}>
        <p>username: luis@gmail.com</p>
        <p>password: admin1234</p>
      </div>
      <form action="login" onSubmit={handleSubmit}>
        <label htmlFor="username">USERNAME: </label>
        <input
          type="text"
          name="username"
          onChange={handleInput}
          placeholder="Ingrese el usuario..."
          value={form.username}
        />
        <p>{error.username}</p>
        <label htmlFor="password">PASSWORD: </label>
        <input
          type="password"
          name="password"
          onChange={handleInput}
          placeholder="Ingrese el password..."
          value={form.password}
        />
        <p>{error.password}</p>
        <button type="submit" onClick={() => handleSubmit()}>Login</button>
      </form>
    </div>
  );
}
