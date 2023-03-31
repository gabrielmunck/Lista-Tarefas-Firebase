import { useState } from "react";
import './home.css'

import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../firebaseConnection";
import { signInWithEmailAndPassword } from 'firebase/auth'


export default function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    if (email !== '' && password !== '') {

      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          //navegar para /admin
          navigate('/admin', { replace: true })
        })
        .catch(() => {
          console.log('erro ao fazer o login')
        })


    } else {
      alert('Verifique os dados de Login')
    }
  }



  return (
    <div className="home-container">
      <h1>Lista de Tarefas</h1>
      <span>Gerencia sua agenda de forma facil!</span>

      <form className="form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="*********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Acessar</button>
        <Link className="button-link" to='/register'>Não possui uma conta? Cadastre-se aqui!</Link>

      </form>



    </div>
  )
}