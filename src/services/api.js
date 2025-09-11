import axios from "axios"


const apiEmissorNotas = axios.create({
    baseURL: "https://gerenciador-notas-servi-o-back-end.onrender.com"
})

apiEmissorNotas.interceptors.request.use( async config =>{

    const userData = await localStorage.getItem("emissorNota:userData")

    const token = userData && JSON.parse(userData).token

    if (token) {
    config.headers.authorization = `Bearer ${token}`
  }

    return config
})

export default apiEmissorNotas