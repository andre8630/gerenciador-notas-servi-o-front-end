import React, { useEffect, useState } from "react";
import { SideMenu } from "../../../components/SideMenu";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { ImageContent } from "../../../components";
import formatCurrency from "../../../utils/formatCurrency";

import {
  Container,
  ContainerItems,
  H1,
  Label,
  Input,
  ButtonCreateOrden,
  TextArea,
  StyledSelect,
  StyledMenuItem,
  StyledFormControl,
  LabelUpload,
  LabelPrice,
  InputPrice,
  ButtonPrint,
  ImageContentWrapper,
  ButtonWhats,
} from "./styles";

export function EditOrdens() {
  const location = useLocation();
  console.log(location.state);
  const [existingImages, setExistingImages] = useState(
    location.state?.path || []
  );
  const port = 3001;
  const [user, setUser] = useState([]);

  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  const [status, setStatus] = React.useState(
    location.state?.status || "Fazer orçamento"
  );

  const [orden, setOrden] = React.useState("");

  useEffect(() => {
    if (location.state?.path) {
      const normalized = location.state.path.map((img) =>
        img.startsWith("http")
          ? img
          : `https://res.cloudinary.com/dqd7lz0lt/image/upload/meu-app/${img}`
      );
      setExistingImages(normalized);
    }
  }, [location.state]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await api.get("/users");
        console.log("Dados do usuário:", response.data[0]); // Verifique a estrutura do objeto
        setUser(response.data[0]);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };
    getUserData();
  }, []);

  const handleRemoveImage = async (index) => {
    const totalExisting = existingImages.length;

    // Remover imagem nova (ainda não salva no servidor)
    if (index >= totalExisting) {
      const newIndex = index - totalExisting;
      const updatedFiles = [...files];
      updatedFiles.splice(newIndex, 1);
      setFiles(updatedFiles);
      return;
    }

    // Remover imagem antiga (já salva no servidor)
    const imageToRemove = existingImages[index];

    try {
      await api.put(`/service-order/${location.state.id}/remove-file`, {
        filename: imageToRemove,
      });

      const updatedExisting = [...existingImages];
      updatedExisting.splice(index, 1);
      setExistingImages(updatedExisting);
    } catch (error) {
      console.error("Erro ao remover imagem do backend:", error);
      toast.error("Erro ao remover imagem.");
    }
  };

  const handleAddImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.accept = "image/*";
    input.onchange = (e) => {
      const newFiles = files.map((File) => setFiles([...files, ...File]));
    };
    input.click();
  };

  const schema = Yup.object().shape({
    name: Yup.string(),
    document: Yup.string(),
    equipment: Yup.string(),
    address: Yup.string(),
    description: Yup.string(),
    phone: Yup.string(),
    price: Yup.string(),
    status: Yup.string(),
    files: Yup.string(),
  });

  const {
    setValue,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: location.state?.name || "",
      document: location.state?.document || "",
      equipment: location.state?.equipment || "",
      address: location.state?.address || "",
      description: location.state?.description || "",
      phone: location.state?.phone || "",

      status: location.state?.status || "Fazer orçamento",
      files: location.state?.files,
    },
  });

  useEffect(() => {
    if (location.state?.status) {
      setStatus(location.state.status);
    }
  }, [location.state]);

  useEffect(() => {
    if (!location.state) {
      console.error("Nenhum dado recebido via state!");
      // Redirecionar de volta ou mostrar mensagem
      navigate("/listar-ordens");
    }
  }, [location.state]);

  const onSubmit = async (data) => {
    const productDataForm = new FormData();

    productDataForm.append("name", data?.name || "");
    productDataForm.append("document", data?.document || "");
    productDataForm.append("equipment", data?.equipment || "");
    productDataForm.append("address", data?.address || "");
    productDataForm.append("description", data?.description || "");
    productDataForm.append("phone", data?.phone || "");
    productDataForm.append("price", data?.price || 0);
    productDataForm.append("status", data?.status || "");
    files.forEach((file) => {
      productDataForm.append("files", file);
    });

    productDataForm.append("keepExistingImages", "true");
    productDataForm.append("existingImages", JSON.stringify(existingImages));

    await toast.promise(
      api.put(
        `service-order/${location.state.id}/update-service`,
        productDataForm,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ),
      {
        pending: "Processando",
        success: "Orden de serviço editada!",
        error: "Erro ao editar orden!",
      }
    );
    setTimeout(() => navigate("/listar-ordens"), 1000);
  };

  return (
    <Container>
      <SideMenu id="side-menu" />

      <ContainerItems>
        <form form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="div-1">
            <H1>{`Editar ordem ${location.state.id}`}</H1>

            <ButtonWhats
              type="button"
              onClick={() => {
                const phone = location?.state?.phone?.replace(/\D/g, "");
                window.open(`https://wa.me/${phone}`, "_blank");
              }}
            >
              Abrir WhatsApp
            </ButtonWhats>

            <Label>Status</Label>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <StyledFormControl fullWidth>
                  <StyledSelect
                    style={{ paddingLeft: "20px" }}
                    {...field}
                    labelId="status-select-label"
                    id="status-select"
                    onChange={(e) => field.onChange(e.target.value)}
                    {...register("status")} // Esta linha é crucial
                  >
                    <StyledMenuItem value="Fazer orçamento">
                      Fazer orçamento
                    </StyledMenuItem>
                    <StyledMenuItem value="Orçamento aprovado">
                      Orçamento aprovado
                    </StyledMenuItem>
                    <StyledMenuItem value="Em execução">
                      Em execução
                    </StyledMenuItem>
                    <StyledMenuItem value="Concluído">Concluído</StyledMenuItem>
                    <StyledMenuItem value="Cancelado">Cancelado</StyledMenuItem>
                    <StyledMenuItem value="Garantia">Garantia</StyledMenuItem>
                  </StyledSelect>
                </StyledFormControl>
              )}
            />

            <Label>Nome do cliente</Label>
            <Input
              type="text"
              {...register("name")}
              placeholder="Nome do cliente"
              defaultValue={location.state?.name}
            />

            <Label>CPF</Label>
            <Input
              type="number"
              placeholder="CPF"
              {...register("document")}
              defaultValue={location.state?.document}
            />

            <Label>Endereço</Label>
            <Input
              type="text"
              placeholder="Endereço"
              {...register("address")}
              defaultValue={location.state?.address}
            />

            <Label>Telefone</Label>
            <Input
              type="number"
              placeholder="Telefone do cliente"
              {...register("phone")}
              defaultValue={location.state?.phone}
            />

            <Label>Equipamento</Label>
            <Input
              type="text"
              placeholder="Equipamento"
              {...register("equipment")}
              defaultValue={location.state?.equipment}
            />

            <Label>Descrição</Label>

            <TextArea
              className="description"
              rows="5"
              cols="10"
              wrap="soft"
              placeholder="Descrição"
              {...register("description")}
              defaultValue={location.state?.description}
            />

            <LabelPrice>
              Valor {formatCurrency(location.state?.price)}
            </LabelPrice>

            <InputPrice
              type="number"
              {...register("price")}
              placeholder="Digite o novo valor"
            />

            <ButtonPrint
              type="button"
              style={{ gridColumn: "1 / -1" }}
              onClick={() => window.print()}
            >
              Imprimir
            </ButtonPrint>

            <ButtonCreateOrden style={{ gridColumn: "1 / -1" }} type="submit">
              Atualizar ordem
            </ButtonCreateOrden>
          </div>
          <div className="div-2">
            <ImageContent
              images={existingImages}
              newImages={files}
              onRemoveImage={handleRemoveImage}
            />

            <LabelUpload>
              Adicionar novas imagens
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => {
                  const newFiles = Array.from(e.target.files);
                  setFiles([...files, ...newFiles]);
                }}
              />
            </LabelUpload>
          </div>
        </form>

        <div id="print-section">
          <div className="print-page">
            {[1, 2].map((i) => (
              <div className="print-copy" key={i}>
                <h3 style={{ marginBottom: "15px", marginTop: "10px" }}>
                  N° {location.state?.id}
                </h3>
                <h2 style={{ marginBottom: "15px" }}>
                  {user?.enterprise_name}
                </h2>

                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "40px",
                    marginBottom: "5px",
                  }}
                >
                  Email...............: {user?.email}
                </p>
                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "40px",
                    marginBottom: "5px",
                  }}
                >
                  Telefone..........: {user?.phone_number}
                </p>
                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "40px",
                    marginBottom: "5px",
                  }}
                >
                  CNPJ...............: {user?.enterprise_document}
                </p>
                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "40px",
                    marginBottom: "5px",
                  }}
                >
                  Data.................: {new Date().toLocaleDateString()}
                </p>

                <hr style={{ margin: "15px 0" }} />

                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "40px",
                    marginBottom: "5px",
                  }}
                >
                  <strong>Cliente............:</strong> {location.state?.name}
                </p>
                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "40px",
                    marginBottom: "5px",
                  }}
                >
                  <strong>CPF.................:</strong>{" "}
                  {location.state?.document}
                </p>
                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "40px",
                    marginBottom: "5px",
                  }}
                >
                  <strong>Telefone.........:</strong> {location.state?.phone}
                </p>
                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "40px",
                    marginBottom: "5px",
                  }}
                >
                  <strong>Endereço.........:</strong> {location.state?.address}
                </p>
                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "40px",
                    marginBottom: "5px",
                  }}
                >
                  <strong>Equipamento...:</strong> {location.state?.equipment}
                </p>
                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "40px",
                    margin: "10px 0",
                  }}
                >
                  <strong>Descrição:</strong>
                </p>
                <p className="descricao">{location.state?.description}</p>
                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "40px",
                    margin: "10px 0",
                  }}
                >
                  <strong>Valor:</strong>{" "}
                  {formatCurrency(location.state?.price)}
                </p>

                <p> </p>
              </div>
            ))}
          </div>
        </div>
      </ContainerItems>
    </Container>
  );
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
