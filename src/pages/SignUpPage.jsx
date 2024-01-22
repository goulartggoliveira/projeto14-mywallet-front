import { Link } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useQuickIn } from "../hooks/useQuickIn"
import useForm from "../hooks/useForm"
import {useSignUp} from "../services/user"

export default function SignUpPage() {
  const { form, handleForm } = useForm({ name:"", email: "", password: "", confirmPassword: ""})
  useQuickIn()
  const signUp = useSignUp()


function submitForm(e) {
  e.preventDefault()

  if (form.password !== form.confirmPassword) {
   return alert("senhas não batem")
  }
  delete form.confirmPassword
  signUp(form)

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
