import styled from "@emotion/styled"


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
   
    
`

export const ContainerItems = styled.div `
    display: flex;
    flex-direction: column;
    padding: 20px;
    
    margin-left: 300px; /* Largura do menu */
    @media (max-width: 768px) {
         margin: 0;
         padding: 10px;;
         gap: 0;
         max-width: 100%;
     }
`

export const Label = styled.h1`
    padding: 20px;
    margin-top: 50px;
    margin-left: 35px;
    font-size: 28px;
    color: #474646ff;

`


export const GraficoWrapper = styled.div`
  

`

export const ButtonPlus = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #00ccff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  font-size: 32px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  &:hover {
        opacity: 0.8 ;
    }
    &:active {
        opacity: 0.6 ;
    }
`