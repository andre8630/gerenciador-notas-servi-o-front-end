import React from "react";
import { Button } from "../../components";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../hooks/UserContext";
import { useNavigate, Link } from "react-router-dom";
import emailjs from "emailjs-com";
import {
  Container,
  ContainerItems,
  H1,
  Span,
  Input,
  Header,
  SpanFooter,
} from "./styles";

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um email valido")
      .required("Digite um email"),
    password: Yup.string()
      .required("Digite uma senha")
      .min(6, "Minimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    try {
      const { data } = await toast.promise(
        api.post("sessions", {
          email: clientData.email,
          password: clientData.password,
        }),
        {
          pending: "Entrando...",
          success: "Bem vindo",
          error: "Email ou senha incorretos",
        }
      );

      putUserData(data);
      setTimeout(() => {
        navigate("/painel");
      }, 1000);
    } catch (error) {
      // O toast de erro já é tratado pelo toast.promise
    }
  };

  return (
    <Container>
      <ContainerItems>
        <Header>
          <h1>Bem vindo ao gerenciador de notas de serviços</h1>
        </Header>

        <H1>Login</H1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Span>Email</Span>
            <Input type="email" {...register("email")} />
            <p className="errors">{errors.email?.message}</p>
          </div>
          <div>
            <Span>Senha</Span>
            <Input type="password" {...register("password")} />
            <p className="errors">{errors.password?.message}</p>
          </div>

          <Button type="submit">Fazer login</Button>
        </form>
        <SpanFooter>
          Não possui conta ? <Link to={"/cadastro"}>Crie uma</Link>
        </SpanFooter>
      </ContainerItems>
    </Container>
  );
}
