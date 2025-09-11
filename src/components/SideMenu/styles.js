import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export const Container = styled.div`
    background: linear-gradient(to bottom, #01435eff, #2d51bbff);
    box-shadow: 0px 0px 14px 0px #00000026;
    width: 300px;
    min-height: 100vh;
    position: fixed;
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
    padding-top: 25px;
    

    @media (max-width: 768px) {
        transform: ${({ isMenuOpen }) => 
            isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'};
    }

    hr {
        margin: 50px 15px;
    }
`

export const ItemContainer = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    background: ${props => props.isActive ? "#06af3eff" : "none"};
    border-radius: 2px;
    margin: 15px;
    padding-left: 20px;

   

    .icon {
        color: #FFFFFF;
        margin-right: 5px;
    }
`

export const ListLink = styled(Link)`
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0px;
    margin-left: 20px;
    margin-top: 3px;
    
    cursor: pointer;
    text-decoration: none;
    color: #FFFFFF;
`

export const MenuButton = styled.button`
    position: fixed;
    top: 20px;
    left: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 101;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1001;
`

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Adicione esta linha para alinhar verticalmente
  padding: 10px;
  gap: 10px; // Espaço entre logo e texto

  button {
    background: transparent;
    border: none;
    
  }

  @media (max-width: 768px) {
    flex-direction: column; // Muda para coluna no mobile
    align-items: flex-start;
    margin-top: 50px;
    margin-left: 30px;
  }
`

export const Logo = styled.div`
  margin-bottom: 35;
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px; // Espaço entre logo e texto no mobile
    align-self: center;
  }

  img {
    width: 80px; // Reduz um pouco o tamanho
    height: 80px;
    border-radius: 100%;
    cursor: pointer;
    object-fit: cover; // Garante que a imagem não fique distorcida
    
    @media (max-width: 400) {
      width: 50px;
      height: 50px;
    }
  }
`

export const H1 = styled.h1`
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #FFFFFF;
  margin: 0; // Remove margens antigas
  margin-top: 30px;
  white-space: nowrap; // Evita quebra de linha
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
  @media (max-width: 768px) {
    margin-top: 30px;
    font-size: 22px; // Espaço entre logo e texto no mobile
  }
  
`


