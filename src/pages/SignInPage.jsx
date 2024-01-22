import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import MyWalletLogo from "../components/MyWalletLogo";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import Usercontext from "../contexts/Usercontext";

export default function SignInPage() {
  const { setToken, setUsername} = useContext(Usercontext)


  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_API_URL}/sign-in`, form)
      .then((res) => {
        setToken(res.data.token)
        setUsername(res.data.profileName)
        console.log(res.data)
        navigate("/home")
      })
      .catch((error) => console.log(error.data));
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
