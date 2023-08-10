const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const validPassword = /\d+/

export default function validations ({ name, email, password }) {
  const errors = {}
  if (!name) errors.name = 'El nombre de usuario no puede estar vacio'
  else if (name.length > 20) { errors.name = 'El nombre de usuario no puede tener más de 20 caracteres' }

  if (!email) errors.email = 'El email no puede estar vacio'
  else if (!validEmail.test(email)) errors.email = 'Correo invalido'
  else if (email.length > 40) { errors.email = 'El email no puede tener más de 40 caracteres' }

  if (!password) errors.password = 'Ingrese el password'
  else if (!validPassword.test(password)) { errors.password = 'La contraseña tiene que tener al menos un número' } else if (password.length < 5 || password.length > 40) {
    errors.password =
      'La contraseña tiene que tener una longitud entre 5 y 40 caracteres'
  }

  return errors
}
