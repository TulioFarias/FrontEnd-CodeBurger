import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import CadastroImg from '../../assets/assetsLogin/cadastro-img.svg'
import LogoImg from '../../assets/assetsLogin/codeburger-logo.png'
import { Button, ErrorMessage } from '../../components'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SingIngLink
} from './styles'

export function Cadastro() {
  const schema = Yup.object()
    .shape({
      name: Yup.string().required('O seu nome é obrigatório'),
      email: Yup.string()
        .email('Digite um e-mail válido.')
        .required('O e-mail é obrigatório.'),
      password: Yup.string()
        .required('A senha é obrigatória.')
        .min(6, 'A senha deve ter no mínimo 6 dígitos.'),
      confirmPassword: Yup.string()
        .required('A senha é obrigatória.')
        .oneOf([Yup.ref('password')], 'As senhas devem ser iguais.')
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Seu cadastro foi realizado com sucesso.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        })
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça login para continuar', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        })
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente...')
    }
  }

  return (
    <Container>
      <LoginImage src={CadastroImg} alt="cadastr-img" />
      <ContainerItens>
        <img src={LogoImg} alt="logo-img" />
        <h1>Cadastra-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 15 }}>
            Cadastrar
          </Button>
        </form>
        <SingIngLink>
          Ja tem uma conta? <Link to="/login">Entre</Link>
        </SingIngLink>
      </ContainerItens>
    </Container>
  )
}
