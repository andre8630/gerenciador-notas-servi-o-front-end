import React, { useEffect, useState } from 'react'
import { Container, ContainerItems, ButtonPlus, GraficoWrapper, Label } from "./styles"
import { SideMenu } from "../../components/SideMenu"
import { useNavigate } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts'
import api from "../../services/api"
import { format, parseISO } from "date-fns"

export function Painel() {
    const [totalNotas, setTotalNotas] = useState(0)
    const [totalValor, setTotalValor] = useState(0)
    const navigate = useNavigate()
    const [graficoData, setGraficoData] = useState([])

    useEffect(() => {
        const carregarDados = async () => {

            

            try {
                const response = await api.get("/service-order") // já filtra pelo userId via token
                const ordens = response.data

                // Inicializa array com os 12 meses zerados
                const meses = [
                    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
                    "Jul", "Ago", "Set", "Out", "Nov", "Dez"
                ]

                const contagem = new Array(12).fill(0)
                const somaValores = new Array(12).fill(0)

                ordens.forEach((orden) => {
                    const mes = new Date(orden.createdAt).getMonth() // 0 - 11
                    contagem[mes]++
                    somaValores[mes] += Number(orden.price || 0)
                })

                
                const dadosFormatados = meses.map((mes, index) => ({
                    name: mes,
                    notas: contagem[index],
                    valor: somaValores[index]
                }))
                let totalNotasTemp = 0
                let totalValorTemp = 0

                ordens.forEach((orden) => {
                const mes = new Date(orden.createdAt).getMonth()
                contagem[mes]++;
                somaValores[mes] += Number(orden.price || 0)
                
                totalNotasTemp++
                totalValorTemp += Number(orden.price || 0)
                });

                setTotalNotas(totalNotasTemp)
                setTotalValor(totalValorTemp)

                setGraficoData(dadosFormatados)
            } catch (err) {
                console.error("Erro ao carregar ordens:", err)
            }
        }

        carregarDados()
    }, [])
    
    return (
        <Container>
            <SideMenu />
            <ContainerItems>
                <Label>Notas emitida a cada mês</Label>
                <ResponsiveContainer width="100%" height={300} style={{marginTop: "70px"}}>
                    <BarChart data={graficoData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                        <XAxis dataKey="name" stroke="#8884d8" />
                        <YAxis />
                        <Tooltip wrapperStyle={{ backgroundColor: '#ccc' }} />
                        
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar dataKey="notas" fill="#82ca9d" barSize={30} />
                    </BarChart>
                </ResponsiveContainer>

                <Label>Valores de notas por mês</Label>
                <GraficoWrapper>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={graficoData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                        <XAxis dataKey="name" stroke="#8884d8" />
                        <YAxis />
                        <Tooltip />
                        
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Line type="monotone" dataKey="valor" stroke="#00c49f" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                    </GraficoWrapper>

                    <Label>Valores totais</Label>
                    <GraficoWrapper>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart
                            layout="vertical"
                            data={[
                                { name: "Quantidade de Notas", valor: totalNotas },
                                { name: "Valor Total", valor: totalValor }
                            ]}
                            margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
                            >
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip />
                            <Bar dataKey="valor" fill="#8884d8" barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </GraficoWrapper>
                <ButtonPlus onClick={() => navigate("/criar-ordens")}>+</ButtonPlus>
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