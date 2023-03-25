import { useState } from "react";
import validations from "../Form/validations";
import style from "./Register.module.css";
import { createUser } from "../../redux/actions_creators";
import { useDispatch } from "react-redux";

export default function Register({ setLogin }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (evt) => {
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

  const handleSubmitRegister = (evt) => {
    evt?.preventDefault();
    //envio la peticion post para crear el usuario
    dispatch(createUser(form));
    setForm({
      name: "",
      email: "",
      password: "",
    });
    setError({
      name: "",
      email: "",
      password: "",
    });
    setLogin(false);
  };

  return (
    <div className={style.register}>
      <h3>Registrarse</h3>
      <form action="login" onSubmit={handleSubmitRegister}>
        <label htmlFor="name">NOMBRE: </label>
        <input
          type="text"
          name="name"
          onChange={handleRegister}
          placeholder="Ingrese su nombre..."
          value={form.name}
        />
        <p>{error.name}</p>
        <label htmlFor="email">EMAIL: </label>
        <input
          type="text"
          name="email"
          onChange={handleRegister}
          placeholder="Ingrese el email..."
          value={form.email}
        />
        <p>{error.email}</p>
        <label htmlFor="password">PASSWORD: </label>
        <input
          type="password"
          name="password"
          onChange={handleRegister}
          placeholder="Ingrese el password..."
          value={form.password}
        />
        <p>{error.password}</p>
        <button
          style={{ width: "100px" }}
          type="submit"
          onClick={() => handleSubmitRegister()}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
