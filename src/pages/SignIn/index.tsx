import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Input } from "../../components/Input";
import { Background, Form, SignInContainer } from "./styles";

import { FiMail, FiLock } from 'react-icons/fi';
import { Button } from "../../components/Button";

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);
 
  async function handleSignIn(event: FormEvent) {
    event.preventDefault();
  
    setIsLoadingSignIn(true);
    signIn(email, password)
    .then(() => {
      setIsLoadingSignIn(false);
    })
    .catch((error) => {
      console.log(error);
      setIsLoadingSignIn(false);
    });
  }

  return (
    <SignInContainer>
      <Form>
        <h1>Notes Only</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={event => setEmail(event.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={event => setPassword(event.target.value)}
        />

        <Button
          title="Entrar"
          onClick={handleSignIn}
          loading={isLoadingSignIn}
        />

        <Link to="/register">
          Criar conta
        </Link>
      </Form>

      <Background />
    </SignInContainer>
  )
}