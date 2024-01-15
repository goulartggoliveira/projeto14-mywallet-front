import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"
import axios from "axios"

export default function SignUpPage() {
  const [form, setForm] = useState({ name:"", email: "", password: "", confirmPassword: ""})
  const navegate = useNavigate()

function handleForm(e) {
  setForm({...form, [e.target.name]: e.target.value })
}

function submitForm(e) {
  e.preventDefault()

  if (form.password !== form.confirmPassword) {
   return alert("senhas não batem")
  }
  delete form.confirmPassword
  axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, form)
  .then( res => navegate("/"))
  .catch( error => alert(error.response.message) )

}

  return (
    <SingUpContainer>
      <form onSubmit={submitForm}>
        <MyWalletLogo />
        <input required placeholder="Nome" name="name" value={form.name} onChange={handleForm} type="text" data-test="name"/>
        <input required placeholder="E-mail" name="email" value={form.email} onChange={handleForm} type="email" data-test="email"/>
        <input required placeholder="Senha" name="password" value={form.password} onChange={handleForm} minLength={3} type="password" autoComplete="new-password" data-test="password"/>
        <input required placeholder="Confirme a senha" name="confirmPassword" value={form.confirmPassword} onChange={handleForm} minLength={3} type="password" autoComplete="new-password" data-test="conf-password"/>
        <button type="submit" data-test="sign-up-submit">Cadastrar</button>
      </form>

      <Link to="/">
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
