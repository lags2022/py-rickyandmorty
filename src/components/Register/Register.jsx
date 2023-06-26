import { useState } from "react";
import validations from "../Form/validations";
import style from "./Register.module.css";
import { createUser } from "../../services/login";
import toast, { Toaster } from "react-hot-toast";

export default function Register({ setLogin }) {
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
    try {
      //envio la peticion post para crear el usuario
      if (![form.name, form.email, form.password].every(Boolean))
        throw new Error("Data missing");
      if (![error.name, error.email, error.password].some(Boolean)) {
        createUser(form);
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
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={style.register}>
      <h3>Sign Up</h3>
      <form action="login" onSubmit={handleSubmitRegister}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleRegister}
          value={form.name}
        />
        <p>{error.name}</p>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          onChange={handleRegister}
          value={form.email}
        />
        <p>{error.email}</p>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          onChange={handleRegister}
          value={form.password}
        />
        <p>{error.password}</p>
        <button type="submit">Sign Up</button>
      </form>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <h5 style={{ margin: "auto 0px" }}>Already have an account?</h5>
        <h5 className={style.regbut} onClick={() => setLogin(false)}>
          Login
        </h5>
      </div>
      <Toaster />
    </div>
  );
}
