import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../../services/api";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { SideMenu } from "../../../components";

import {
  Container,
  ContainerItems,
  H1,
  Span,
  Input,
  Button,
  LabelUpload,
  Logo,
  ButtonChangePass,
} from "./styles";

export function UserEdit() {
  const [user, setUser] = useState();

  const navigate = useNavigate();

  const schema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string(),
    enterprise_name: Yup.string(),
    enterprise_document: Yup.string(),
    phone_number: Yup.string(),

    // password: Yup.string().required("Digite uma senha").min(6, "Minimo 6 caracteres"),
    // ConfirmPassword: Yup.string().required("Confirme sua senha").oneOf([Yup.ref('password'), null], 'As senhas devem coincidir')
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

  const onSubmit = async (clientData) => {
    console.log("Dados:", clientData);

    const userDataForm = new FormData();

    userDataForm.append("name", clientData?.name);
    userDataForm.append("email", clientData?.email);
    userDataForm.append("enterprise_name", clientData?.enterprise_name);
    userDataForm.append("enterprise_document", clientData?.enterprise_document);
    userDataForm.append("phone_number", clientData?.phone_number);
    userDataForm.append("logo", clientData?.logo?.[0]);

    try {
      await api.put(`/users/${user?.id}`, userDataForm, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Usuario editado com sucesso");
      navigate("/");
    } catch (error) {
      toast.error("Falha no sistema tente novamente!");
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await api.get("/users");
        console.log("Dados do usuário:", response.data[0]); // Verifique a estrutura do objeto
        setUser(response.data[0]);
        reset(response.data[0]);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };
    getUserData();
  }, []);

  return (
    <Container>
      <SideMenu />
      <ContainerItems>
        <H1>Bem vindo {user?.name}</H1>

        <H1>Tela de usuario</H1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          {/* <Logo>
            <img src={user?.url_logo} />
          </Logo>

          <div>
            <LabelUpload>
              Upload logo
              <input type="file" {...register("logo")} />
            </LabelUpload>
          </div> */}

          <div>
            <Span>Nome</Span>
            <Input type="text" {...register("name")} />
          </div>

          <div>
            <Span>Email</Span>
            <Input type="email" {...register("email")} />
          </div>

          <div>
            <Span>Nome da empresa</Span>
            <Input type="text" {...register("enterprise_name")} />
          </div>

          <div>
            <Span>Cnpj</Span>
            <Input type="text" {...register("enterprise_document")} />
          </div>

          <div>
            <Span>Telefone</Span>
            <Input type="text" {...register("phone_number")} />
          </div>

          <ButtonChangePass
            type="button"
            onClick={() => navigate("/editar-senha")}
          >
            Mudar senha
          </ButtonChangePass>
          <Button type="submit">Atualizar Usuario</Button>
        </form>
      </ContainerItems>
    </Container>
  );
}
