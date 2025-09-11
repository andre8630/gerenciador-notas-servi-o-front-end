import React, { 
    createContext, 
    useContext, 
    useEffect, 
    useState } from "react" // Import React and necessary hooks



const UserContext = createContext({}) // Criar o contexto do usuário

export const UserProvider = ({ children }) => { // Criar o provider do usuário  

    const [userData, setUserData] = useState({}) // Estado para armazenar os dados do usuário
    // Função para atualizar os dados do usuário
    const putUserData = async userInfo => {     
        setUserData(userInfo)   // Atualiza o estado com os novos dados do usuário no localstorage
        await localStorage.setItem("emissorNota:userData", JSON.stringify(userInfo))
    }
    
    const logout= async () => {
        await localStorage.removeItem("emissorNota:userData")
    }

    // async function loadName() {
    //   const { name } = await localStorage.getItem("codeBurger:userData", "name")
      
    // }

    useEffect(() => {
        const loadUserData = async () => {
            const clientInfo = await localStorage.getItem("emissorNota:userData")
            
            if(clientInfo) {
                setUserData(JSON.parse(clientInfo))
            }
        }
        loadUserData()

        }, [])

        // Retorna o contexto do usuário com os dados e a função para atualizar
    return (    
        <UserContext.Provider value={{ putUserData, userData, logout }}>    
            {children}
        </UserContext.Provider>
    )
}
// Hook para acessar o contexto do usuário
// Ele permite que outros componentes acessem os dados do usuário e a função para atualiz
export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("Erro in userUser")
    }
    return context
}
