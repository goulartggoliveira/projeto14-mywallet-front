import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import MyWalletLogo from "../components/MyWalletLogo";
import { useState } from "react";
import { useQuickIn } from "../hooks/useQuickIn";
import { useSignIn} from "../services/user";
import useForm from "../hooks/useForm";

export default function SignInPage() {
  const { form, handleForm } = useForm({ email: "", password: "" })
  const login = useSignIn()
  useQuickIn()


  function submitForm(e) {
    e.preventDefault();

    login(form)
  }
  return (
    <SingInContainer>
      <form onSubmit={submitForm}>
        <MyWalletLogo />
        <input
          required
          placeholder="E-mail"
          name="email"
          value={form.email}
          onChange={handleForm}
          type="email"
          data-test="email"
        />
        <input
          required
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={handleForm}
          minLength={3}
          type="password"
          autoComplete="new-password"
          data-test="password"
        />
        <button type="submit" data-test="sign-in-submit">Entrar</button>
      </form>

      <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
    </SingInContainer>
  );
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
