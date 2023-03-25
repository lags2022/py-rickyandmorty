import { useEffect, useState } from "react";
import Register from "../Register/Register";
import style from "./Form.module.css";
import validations from "./validations";
import { loginUser } from "../../redux/actions_creators";
import { useDispatch } from "react-redux";

//{ valiDated } como props estaba
export default function Form() {
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
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
  const handleSubmit = async (evt) => {
    evt?.preventDefault();
    try {
      dispatch(loginUser(form));
      setError({
        email: "",
        password: "",
      });
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <div className={style.form}>
      {!login ? (
        <>
          <h3>LOGIN</h3>
          <form action="login" onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL: </label>
            <input
              type="text"
              name="email"
              onChange={handleInput}
              placeholder="Ingrese el email..."
              value={form.email}
            />
            <p>{error.email}</p>
            <label htmlFor="password">PASSWORD: </label>
            <input
              type="password"
              name="password"
              onChange={handleInput}
              placeholder="Ingrese el password..."
              value={form.password}
            />
            <p>{error.password}</p>
            <button type="submit" onClick={() => handleSubmit()}>
              Login
            </button>
          </form>
          <button
            style={{ width: "100px", marginTop: "10px" }}
            onClick={() => setLogin(true)}
          >
            Registrarse
          </button>
        </>
      ) : (
        <Register setLogin={setLogin} />
      )}
    </div>
  );
}
