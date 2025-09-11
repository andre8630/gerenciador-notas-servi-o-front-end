import styled from "@emotion/styled"


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #e5e5e5;
    background-size: 100%;
    width: 100%;
    height: 100%;

    
    

    

    .errors {
        color: red;
        font-size: 14px;
        margin-top: -20px;
        margin-left: 20px;
    }
`

export const ContainerItems = styled.div `
    
    display: flex;
    flex-direction: column;
   
    padding: 20px;
    margin-left: 500px; /* Largura do menu */
    gap:20px;
    border-radius: 8px;
    padding: 10px;
    text-align: start;

    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: 700px;
        gap: 20px;
        margin-left: 15px;
        align-items: center;
    
    }

    .div-1 {
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;
    }
    .div-2 {
      padding-top: 10px;
      
      height: 500px;
      max-height: 500px;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;
    }

    @media (max-width: 768px) {
        form {grid-template-columns: 1fr !important;}
         margin: 0;
         padding: 10px;;
         gap: 10;
         max-width: 100vw;
         
     }
     
    

     
`

export const LabelUpload = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 20px;
  width: 300px;

  .thumbnails-grid {
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .thumbnail {
    max-height: 500px;
    width: 90px;
    height: 90px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
      border: 1px solid #ddd;
    }
  }

  .buttons-container {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .upload-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: #38c768ff;
    color: white;
    border: 2px dashed #FFFFFF;
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
    flex: 1;

    input {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      cursor: pointer;
    }
  }

  .remove-button {
    background-color: #ff4444;
    color: white;
    border: none;
    height: 40px;
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
    flex: 1;
    transition: all 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`



export const H1 = styled.h1`
    color: #38c768ff;
    text-align: left;
    margin-top: 70px;
    margin-bottom: 20px;
    margin-left: 35px;
    max-width: 300px;
    line-height: 50px;
    font-weight: 800;

`

export const Input = styled.input`
    box-shadow: 3px 3px 10px 0px #4A90E230;
    width: 300px;
    height: 40px;
    opacity: 1;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 16px;
    border: none;
    margin-bottom: 10px;
    margin-left: 20px;

    
    
    
`


export const TextArea = styled.textarea`
  box-shadow: 3px 3px 10px 0px #4A90E230;
  width: 300px;
  height: 100px; /* Altura fixa */
  border-radius: 5px;
  padding: 10px; /* Espaçamento interno */
  font-size: 16px;
  border: none;
  margin-left: 20px;
  margin-bottom: 10px;
  resize: none; /* Impede redimensionamento */
  white-space: pre-wrap; /* Quebra de linha automática */
  word-wrap: break-word; /* Quebra palavras longas */
  font-family: inherit; /* Mantém a mesma fonte do input */
  
  &:focus {
    outline: none; /* Remove borda ao focar */
  }
`

export const Label = styled.p`
   color: #363636ff;
   margin-left: 20px;
   margin-bottom: -15px;
   font-size: 14px;
   text-align: start;

`

export const ButtonCreateOrden = styled.button `
    background-color: #00ccff;
    color: white;
    border: none;
    border-radius: 8px;
    width: 300px;
    height: 40px;
    font-size: 18px;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 40px;
    margin-bottom:40px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 900;

    &:hover {
            opacity: 0.8 ;
        }
        &:active {
            opacity: 0.6 ;
        }    
`
