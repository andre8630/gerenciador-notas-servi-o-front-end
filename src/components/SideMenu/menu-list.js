import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl'
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import AddBoxIcon from '@mui/icons-material/AddBox'
import PersonIcon from '@mui/icons-material/Person';

const listLinks = [
    {
        id: 1,
        label: "Home",
        link: "/painel",
        icon: HomeWorkIcon,
    },
    {
        id:2,
        label: "Criar ordem",
        link: "/criar-ordens",
        icon: AddBoxIcon,
    },
    
    {
        id: 3,
        label: "Listar ordens",
        link: "/listar-ordens",
        icon: FormatListNumberedRtlIcon,
        
    },
    {
        id: 4,
        label: "Editar Usuario",
        link: "/editar-usuario",
        icon: PersonIcon,
    },
   
]


export default listLinks