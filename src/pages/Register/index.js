import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { auth } from '../../firebaseConnection'
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleRegister(e) {

    e.preventDefault();

    if (email !== '' && password !== '') {

      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/admin', { replace: true })

        })
        .catch(() => {
          console.log('ERRO AO FAZER CADASTRO')
        })

    } else {
      alert('Verifique os dados de Login')
    }
  }



  return (
    <div className="home-container">
      <h1>- Cadastre-se! -</h1>
      <span>Crie sua nova conta!</span>

      <form className="form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="**********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
        <Link className="button-link" to='/'>Ja possui uma conta? Faça o Login aqui</Link>

      </form>



    </div>
  )
}