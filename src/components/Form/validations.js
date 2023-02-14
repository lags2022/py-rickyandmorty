const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const validPassword = /\d+/;

export default function validations({ username, password }) {
  let errors = {};
  if (!username) errors.username = "El nombre de usuario no puede estar vacio";
  else if (!validEmail.test(username)) errors.username = "Correo invalido";
  else if (username.length > 35)
    errors.username =
      "El nombre de usuario no puede tener más de 35 caracteres";
  if (!password) errors.password = "Ingrese el password";
  else if (!validPassword.test(password))
    errors.password = "La contraseña tiene que tener al menos un número";
  else if (password.length < 6 || password.length > 10)
    errors.password =
      "La contraseña tiene que tener una longitud entre 6 y 10 caracteres";
  return errors;
}
