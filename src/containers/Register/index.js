import React from 'react'
import { Button } from '../../components'
import { useForm } from "react-hook-form"
import api from "../../services/api"
import { toast } from "react-toastify"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from 'react-router-dom'

import {
    Container,
    ContainerItems,
    H1,
    Span,
    Input,
    SpanFooter
} from "./styles"


export function Register() {

    const navigate = useNavigate()
    

    const schema = Yup.object().shape({
        name: Yup.string().required("Digite um nome"),
        email: Yup.string().email("Digite um email valido").required("Digite um email"),
        enterprise_name: Yup.string().required("Digite o nome da empresa"),
        enterprise_document: Yup.string().required("Digite o cnpj da empresa"),
        phone_number: Yup.string().required("Digite o telefone da empresa"),
        password: Yup.string().required("Digite uma senha").min(6, "Minimo 6 caracteres"),
        ConfirmPassword: Yup.string().required("Confirme sua senha").oneOf([Yup.ref('password'), null], 'As senhas devem coincidir')
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async clientData => {
        try {
            const { status } = await api.post("users", {
                name: clientData.name,
                email: clientData.email,
                enterprise_name: clientData.enterprise_name,
                enterprise_document: clientData.enterprise_document,
                phone_number: clientData.phone_number,
                password: clientData.password,
            }, { validateStatus: () => true })

            if (status === 200 || status === 201) {
                toast.success("Cadastro realizado com sucesso")
                setTimeout(() => {
                navigate("/")
            }, 1000)
            } else if (status === 409) {
                toast.error("Email ja cadastrado! faça o login ou ensira outro.")
            } else {
                throw new Error()
            }
        } catch (error) {
            toast.error("Falha no sistema tente novamente!")
        }
    }

    return (
        <Container>
            <ContainerItems>
                <H1>Registrar</H1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Span>Nome</Span>
                        <Input type='text' {...register("name")} />
                        <p className='errors'>{errors.name?.message}</p>
                    </div>
                    <div>
                        <Span>Email</Span>
                        <Input type='email' {...register("email")} />
                        <p className='errors'>{errors.email?.message}</p>
                    </div>
                    <div>
                        <Span>Nome da empresa</Span>
                        <Input type='text' {...register("enterprise_name")} />
                        <p className='errors'>{errors.enterprise_name?.message}</p>
                    </div>
                    <div>
                        <Span>Cnpj</Span>
                        <Input type='text' {...register("enterprise_document")} />
                        <p className='errors'>{errors.enterprise_document?.message}</p>
                    </div>
                    <div>
                        <Span>Telefone</Span>
                        <Input type='text' {...register("phone_number")} />
                        <p className='errors'>{errors.phone_number?.message}</p>
                    </div>
                    <div>
                        <Span>Senha</Span>
                        <Input type='password' {...register("password")} />
                        <p className='errors'>{errors.password?.message}</p>
                    </div>
                    <div>
                        <Span>Confirmar senha</Span>
                        <Input type='password' {...register("ConfirmPassword")} />
                        <p className='errors'>{errors.ConfirmPassword?.message}</p>
                    </div>

                    <Button type="submit">Registrar</Button> {/* Alterado de "Fazer login" para "Registrar" */}
                </form>
                <SpanFooter>Já possui conta? <Link to={"/login"}>Faça o login</Link></SpanFooter>
            </ContainerItems>
        </Container>
    )
}

