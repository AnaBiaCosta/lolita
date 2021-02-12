import React from 'react'
import { Link } from 'react-router-dom'
import { Title, Input, Button } from '..'
import { PageWrapper, FormWrapper, RegisterWrapper } from './LoginForm.style'

const LoginForm = () => {
  const handleSubmit = event => {
    event.preventDefault()
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(),
    })
      .then(res => res.json())
      .then(json => json)
  }

  return (
    <PageWrapper>
      <FormWrapper>
        <Title text="Entrar" />
        <form action="" onSubmit={handleSubmit}>
          <Input label="E-mail" type="text" name="username" />
          <Input label="Senha" type="password" name="password" />
          <Button>Entrar</Button>
          <Link to="/entrar/recuperar-senha">Esqueceu a senha?</Link>
        </form>
      </FormWrapper>
      <RegisterWrapper>
        <h2>Cadastro</h2>
        <Link to="/entrar/cadastro">Ainda não tem cadastro? Crie uma conta</Link>
      </RegisterWrapper>
    </PageWrapper>
  )
}

export { LoginForm }
