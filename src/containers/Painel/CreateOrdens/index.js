import React, { useEffect, useState } from 'react'
import { Container, ContainerItems, H1, Label, Input, ButtonCreateOrden, LabelUpload, TextArea } from "./styles"
import { SideMenu } from "../../../components/SideMenu"
import { toast } from 'react-toastify'
import api from "../../../services/api"
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import FileUploadIcon from '@mui/icons-material/FileUpload';




export function CreateOrdens() {
        const [files, setFiles] = useState([])
        const navigate = useNavigate()


        
        const [previews, setPreviews] = useState([])

        const handleFileChange = (e) => {
            if (e.target.files?.length) {
                const newFiles = Array.from(e.target.files);
                const newPreviews = newFiles.map(file => URL.createObjectURL(file));
                
                setFiles(prev => [...prev, ...newFiles]);
                setPreviews(prev => [...prev, ...newPreviews]);
            }
            }

            const handleRemove = () => {
                // Remove o último arquivo adicionado (ordem de carregamento)
                if (previews.length > 0) {
                    const lastIndex = previews.length - 1;
                    URL.revokeObjectURL(previews[lastIndex]);
                    setFiles(files.slice(0, -1));
                    setPreviews(previews.slice(0, -1));
                }
                }
                
        const schema = Yup.object().shape({
            name: Yup.string().required("Digite o nome do cliente"),
            document: Yup.string(),
            equipment: Yup.string(),
            address: Yup.string(),
            description: Yup.string(),
            phone: Yup.string(),
            price: Yup.string(),
            status: Yup.string().nullable(),
            files: Yup.mixed()

        })

        const { register, handleSubmit, control , formState: { errors }} = useForm({
                resolver: yupResolver(schema),
            }) 

        const onSubmit = async data => {
        
        const productDataForm = new FormData()

        productDataForm.append("name", data?.name || "")
        productDataForm.append("document", data?.document || "")
        productDataForm.append("equipment", data?.equipment || "")
        productDataForm.append("address", data?.address || "")
        productDataForm.append("description", data?.description || "")
        productDataForm.append("phone", data?.phone || "")
        productDataForm.append("price", Number(data?.price)  || 0)
        productDataForm.append("status", "Fazer orçamento" || "")
        files.forEach((file) => {
                productDataForm.append("files", file ) // "files" (plural) para o backend
            })

            
            // if (files && files.length > 0) {
            //         files.forEach((file) => {
            //         productDataForm.append("files", file);
            //         });
            //     }

                await toast.promise(
                    api.post("service-order", productDataForm, {
                        headers: {'Content-Type': 'multipart/form-data'}
                    }), 
                    {
                    pending: 'Processando',
                    success: 'Orden de serviço adicionado!',
                    error: 'Erro ao adicionar orden!'
                    }
                );

                setTimeout(() => navigate("/listar-ordens"), 2000);
                }

            useEffect(() => {
                return () => {
                    previews.forEach(preview => URL.revokeObjectURL(preview));
                };
                }, [previews])
                        
    
    




    
        
    
    return (
        <Container>
            <SideMenu />
            <ContainerItems>
              
            <form noValidate onSubmit={handleSubmit(onSubmit)}>

                <div className='div-1'>

                    <H1>Criar orden de serviço</H1>

                    <Label>Nome do cliente</Label>
                    <Input type='text' {...register("name")} />
                    <p className='errors'>{errors.name?.message}</p>

                    <Label>CPF</Label>
                    <Input type='number' {...register("document")} />

                    <Label>Endereço</Label>
                    <Input  type='text' {...register("address")} />

                    <Label>Telefone</Label>
                    <Input  type='number' {...register("phone")} />

                    <Label>Equipamento</Label>
                    <Input  type='text' {...register("equipment")} />

                    <Label>Descrição</Label>

                    <TextArea className='description' rows="5" cols="10" wrap="soft" {...register("description")}/>

                    <Label>Preço</Label>
                    <Input className='price' type='number' {...register("price")} />
                    <ButtonCreateOrden type='submit'>Criar ordem</ButtonCreateOrden>
                </div>

                <div className='div-2'>
                    <LabelUpload>
                            {/* Grid de miniaturas */}
                            {previews.length > 0 && (
                                <div className="thumbnails-grid">
                                {previews.map((preview, index) => (
                                    <div key={index} className="thumbnail">
                                    <img src={preview} alt={`Preview ${index}`} />
                                    </div>
                                ))}
                                </div>
                            )}

                            {/* Container dos botões */}
                            <div className="buttons-container">
                                <div className="upload-button">
                                <FileUploadIcon />
                                <span>Imagens</span>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                </div>
                                
                                {previews.length > 0 && (
                                <button 
                                    type='button'
                                    onClick={handleRemove}
                                    className="remove-button"
                                >
                                    Remover Última
                                </button>
                                )}
                            </div>
                    </LabelUpload>
                    
                </div>

            </form>
           </ContainerItems>
        </Container>
    )
}

















//   <ContentContainer>
//             {ordens && ordens.map((orden) => (
//             <PainelOrdens>  

//                 <PainelItem>
//                     <LabelName key={orden.id}>Orden</LabelName>
//                     <LabelValue>{orden.id}</LabelValue>
//                 </PainelItem>
//                 <PainelItem>
//                     <LabelName key={orden.id}>Cliente</LabelName>
//                     <LabelValue>{orden.name}</LabelValue>
//                 </PainelItem>
//                 <PainelItem>
//                     <LabelName key={orden.id}>Endereço</LabelName>
//                     <LabelValue>{orden.address}</LabelValue>
//                 </PainelItem>
                
//                 <PainelItem>
//                     <LabelName key={orden.id}>Equipamento</LabelName>
//                     <LabelValue>{orden.equipment}</LabelValue>
//                 </PainelItem>
//                 <PainelItem>
//                     <LabelName key={orden.id}>Descrição</LabelName>
//                     <LabelValue>{orden.description}</LabelValue>
//                 </PainelItem>
//                 <PainelItem>
//                     <LabelName key={orden.id}>Telefone</LabelName>
//                     <LabelValue>{orden.phone}</LabelValue>
//                 </PainelItem>
//                 <PainelItem>
//                     <LabelName key={orden.id}>Preço</LabelName>
//                     <LabelValue>{formatedData(orden.price)}</LabelValue>
//                 </PainelItem>
//                 <PainelItem>
//                     <LabelName key={orden.id}>Status</LabelName>
//                     <LabelValue>{orden.status}</LabelValue>
//                 </PainelItem>
//                 <PainelItem>
//                     <LabelName key={orden.id}>Fotos</LabelName>
//                     <LabelValue>{orden.path}</LabelValue>
//                 </PainelItem>

//             </PainelOrdens> 
               
                
//             ))}
//             </ContentContainer>