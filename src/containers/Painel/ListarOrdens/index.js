import React, { useEffect, useState } from "react";
import {
  Container,
  ContentContainer,
  Input,
  Header,
  SearchButton,
  ClearButton,
} from "./styles";
import { SideMenu } from "../../../components";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import formatedData from "../../../utils/formatedDate";
import formatedCurrency from "../../../utils/formatCurrency";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useForm } from "react-hook-form";

export function ListarOrdens() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const [ordens, setOrdens] = useState([]);

  const loadOrdens = async () => {
    try {
      const response = await api.get("service-order");
      setOrdens(response.data);
    } catch (error) {
      console.error("Erro ao buscar ordens:", error);
    }
  };

  useEffect(() => {
    // Carrega imediatamente
    loadOrdens();

    // Configura o polling a cada 30 segundos
    const intervalId = setInterval(loadOrdens, 3600000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  const onSubmit = async (searchData) => {
    try {
      const response = await api.get(`service-order/${searchData.orden}`);

      // Garante que a resposta seja tratada como um array
      setOrdens([response.data]);
    } catch (error) {
      console.error("Erro ao buscar ordem por ID:", error);
      setOrdens([]); // Limpa a lista se nada encontrado
    }
  };

  const handleReset = async () => {
    try {
      const response = await api.get("/service-order");
      setOrdens(response.data);
    } catch (err) {
      console.error("Erro ao buscar ordens:", err);
    }
  };

  function editProduct(row) {
    navigate("/editar-orden", { state: row });
  }

  return (
    <Container>
      <SideMenu />

      <ContentContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Header key={ordens.id}>
            <Input placeholder="Buscar ordem..." {...register("orden")} />
            <SearchButton type="submit">Pesquisar</SearchButton>
            <ClearButton type="button" onClick={handleReset}>
              Limpar
            </ClearButton>
          </Header>
        </form>
        <TableContainer component={Paper} className="table-container">
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow className="tabel-row">
                <TableCell className="table">Orden</TableCell>
                <TableCell className="table">Cliente</TableCell>
                <TableCell className="table">Data</TableCell>
                <TableCell className="table">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ordens &&
                ordens.map((row) => (
                  //LINK DA TABELA LIST
                  <TableRow
                    onClick={() => {
                      editProduct(row);
                      navigate("/editar-ordens", { state: row });
                    }}
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      className="tableValue"
                      component="th"
                      scope="row"
                    >
                      {row.id}
                    </TableCell>
                    <TableCell className="tableValue">{row.name}</TableCell>
                    <TableCell className="tableValue">
                      {formatedData(row.createdAt)}
                    </TableCell>
                    <TableCell className="tableValue">{row.status}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ContentContainer>
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
