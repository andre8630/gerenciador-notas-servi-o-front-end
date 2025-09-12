import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../../../services/api";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { SideMenu } from "../../../../components";

import {
  Container,
  ContainerItems,
  H1,
  Span,
  Input,
  Button,
  LabelUpload,
  Logo,
} from "./styles";

export function PasswordEdit() {
  const [user, setUser] = useState();

  const navigate = useNavigate();

  const schema = Yup.object().shape({
    password: Yup.string()
      .required("Digite a senha atual")
      .min(6, "Minimo 6 caracteres"),
    new_password: Yup.string()
      .required("Digite uma nova senha")
      .min(6, "Minimo 6 caracteres"),
    confirm_new_password: Yup.string()
      .required("Confirme sua senha")
      .oneOf([Yup.ref("new_password"), null], "As senhas devem coincidir"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    // defaultValues: {
    //             name: location.state?.name || "",
    //             document: location.state?.document || "",
    //             equipment: location.state?.equipment || "",
    //             address: location.state?.address || "",
    //             description: location.state?.description || "",
    //             phone: location.state?.phone || "",

    //             status: location.state?.status || "Fazer orçamento",
    //             files: location.state?.files
    //         }
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await api.get("/users");
        // console.log('Dados do usuário:', response.data[0])// Verifique a estrutura do objeto
        setUser(response.data[0]);
        reset(response.data[0]);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };
    getUserData();
  }, []);

  const onSubmit = async (clientData) => {
    try {
      // Verifica se a senha atual está correta
      await api.post(`/users/${user.id}/validate-password`, {
        password: clientData.password,
      });

      // Atualiza a senha
      await toast.promise(
        api.put(`/users/${user.id}/password`, {
          password: clientData.new_password,
        }),
        {
          pending: "Processando",
          success: "Senha editada com sucesso!",
          error: "Erro ao editar orden!",
        }
      );
      setTimeout(() => {
        navigate("/editar-usuario");
      }, 1000);
      // opcional: limpar os campos
    } catch (error) {
      toast.error(error.response?.data?.error || "Erro ao trocar senha");
    }
  };

  return (
    <Container>
      <SideMenu />
      <ContainerItems>
        <H1>Bem vindo {user?.enterprise_name}</H1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          {/* <Logo>
            <img src={user?.url_logo} />
          </Logo> */}
          <H1 style={{ marginLeft: "-20px" }}>Trocar senha</H1>
          <div>
            <Span>Senha atual</Span>
            <Input type="password" {...register("password")} />
            <p className="errors">{errors.password?.message}</p>
          </div>
          <div>
            <Span>Nova senha</Span>
            <Input type="password" {...register("new_password")} />
            <p className="errors">{errors.new_password?.message}</p>
          </div>
          <div>
            <Span>Confirmar nova senha</Span>
            <Input type="password" {...register("confirm_new_password")} />
            <p className="errors">{errors.confirm_new_password?.message}</p>
          </div>
          <Button type="submit">Atualizar senha</Button>{" "}
          {/* Alterado de "Fazer login" para "Registrar" */}
        </form>
      </ContainerItems>
    </Container>
  );
}
