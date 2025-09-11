import React from 'react'
import ReactDOM from 'react-dom/client' // Import ReactDOM to render the application
import { ToastContainer } from 'react-toastify' // Import ToastContainer for notifications
import AppProvider from './hooks' // Import AppProvider que tem todos providers
import GlobalStyles from "./styles/globalStyles" // Import global styles
import AppRoutes from "./routes/routes"
import { BrowserRouter } from 'react-router-dom'    // Import BrowserRouter for routing

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  
  
    
    <>
     <BrowserRouter> {/*PRECISA DEPOIS DA V6 DO REACT ROUTER DOM */}

        <AppProvider> {/* PROVIDER PARA GERENCIAR O USUARIO LOGADO */}

            <AppRoutes />
             

        </AppProvider>

    </BrowserRouter>    

    <ToastContainer autoClose={2000} theme="colored" /> {/* NOTIFICACOES DO APLICATIVO */}

    <GlobalStyles /> {/* ESTILOS GLOBAIS DO APLICATIVO */}
    </>
    
 
)



