import { useState } from 'react'
import Register from '../Register/Register'
import style from './Form.module.css'
import validations from './validations'
import { loginUser } from '../../services/login'
import { setToken } from '../../redux/actions_creators'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

// { valiDated } como props estaba
export default function Form ({ setUser }) {
  const navigate = useNavigate()
  const [login, setLogin] = useState(false)

  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState({
    email: '',
    password: ''
  })
  const handleInput = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value
    })
    setError(
      validations({
        ...form,
        [evt.target.name]: evt.target.value
      })
    )
  }
  const handleSubmit = async (evt) => {
    evt?.preventDefault()
    try {
      const user = await loginUser(form)
      if (![form.email, form.password, user].every(Boolean)) { throw new Error('Data missing') }
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      setToken(user.token)
      setUser(user)
      setError({
        email: '',
        password: ''
      })
      navigate('/home')
    } catch (error) {
      if (error.name === 'TypeError') toast.error('User not found')
      else toast.error(error.message)
    }
  }

  return (
    <div className={style.form}>
      {!login
        ? (
          <>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor='email'>Email: </label>
              <input
                type='text'
                name='email'
                onChange={handleInput}
                value={form.email}
              />
              <p>{error.email}</p>
              <label htmlFor='password'>Password: </label>
              <input
                type='password'
                name='password'
                onChange={handleInput}
                value={form.password}
              />
              <p>{error.password}</p>
              <button type='submit'>Login</button>
            </form>
            <div
              style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              <h5 style={{ margin: 'auto 0px' }}>New to App?</h5>
              <h5 className={style.formbut} onClick={() => setLogin(true)}>
                Sign Up
              </h5>
            </div>
          </>
          )
        : (
          <Register setLogin={setLogin} />
          )}
      <Toaster />
    </div>
  )
}
