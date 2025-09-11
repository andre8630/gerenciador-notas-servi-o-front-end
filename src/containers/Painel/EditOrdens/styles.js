import styled from "@emotion/styled"
import Select from '@mui/material/Select'
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"









export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #e5e5e5;
    background-size: 100%;
    width: 100%;
    height: 100%;

    
    

    

    /* .errors {
        color: red;
        font-size: 14px;
        margin-top: -5px;
        margin-bottom: 5px;
    } */
`

export const ContainerItems = styled.div `
    
    display: flex;
    flex-direction: column;
    
    
    margin-left: 350px;
    
    border-radius: 8px;
    
    text-align: start;



    p{ 
      display: flex;
      flex-direction: row;
    }

    form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 700px;
    gap: 20px;
    margin-left: 15px;
    align-items: start;

   
    div{
      
      
      gap: 20px;
    }

    .div-1 {

    }
    .div-2 {
      
      @media (max-width: 768px){
        margin-top: 1px;
      }
    }
    }

    @media (max-width: 768px) {
        form {grid-template-columns: 1fr !important;}
         margin: 0;
         padding: 10px;;
         gap: 10;
         max-width: 100vw;
         
     }

  
     
`


export const H1 = styled.h1`
    color: #38c768ff;
    text-align: left;
    margin-top: 70px;
    margin-bottom: 50px;
    margin-left: 33px;
    max-width: 350px;
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
    margin-bottom: 20px;
    margin-left: 20px;

    
    
    
`


export const InputPrice = styled.input`
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
    align-self: start;
    text-align: start;

    
    
    
`


export const ButtonWhats = styled.button`
  background-color: #25D366;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  width: 300px;
  height: 55px;
  font-size: 18px;
  margin-left: 20px;;
    
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 30px;
  transition: background 0.3s;

  &:hover {
    background-color: #128C7E;
  }
`

export const LabelPrice = styled.p`
   color: #38c768ff;
   margin-left: 20px;;
   margin-top: 20px;
  
   font-size: 20px;
   align-self: center;
   font-weight: 600;

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



export const ButtonPrint = styled.button `
    background-color: #c05fe6ff;
    color: white;
    border: none;
    border-radius: 8px;
    width: 300px;
    height: 55px;
    font-size: 18px;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 30px;
    
    z-index: 900;
   
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    

    &:hover {
            opacity: 0.8 ;
        }
        &:active {
            opacity: 0.6 ;
        }    

`

export const ButtonCreateOrden = styled.button `
    background-color: #00ccff;
    color: white;
    border: none;
    border-radius: 8px;
    width: 300px;
    height: 55px;
    font-size: 18px;
    cursor: pointer;
    margin-left: 20px;
    margin-top:30px;
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

export const StyledSelect = styled(Select)`
  && {
    width: 300px;
    height: 40px;
    margin-left: 20px;
    margin-bottom: 10px;
    box-shadow: 3px 3px 10px 0px #4A90E230;
    border-radius: 5px;
    background-color: white;
    
    .MuiSelect-select {
      padding: 10px 14px;
      font-size: 16px;
    }
    
    .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  }
`



export const StyledMenuItem = styled(MenuItem)`
  && {
    font-size: 16px;
    padding: 8px 16px;
  }
`;

export const StyledFormControl = styled(FormControl)`
  && {
    margin-bottom: 20px;
  }
`



export const LabelUpload = styled.label`
    background: #38c768ff;
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #FFFFFF;
    z-index: 900;
    border: 2px dashed #FFFFFF;
    flex-direction: column;
    gap: 15px;
    margin-left: 20px;
    margin-top: 20px;
   
    width: 300px;
    height: 60px;
    border-radius: 5px;
    padding: 10px;
    padding-top: 45px;
    cursor: pointer;
    gap: 15px;
    justify-content: center;

    input {
        opacity: 0;
        width: 1px;
    }

    &:hover {
            opacity: 0.8 ;
        }
    &:active {
            opacity: 0.6 ;
        }   

  
  

  .thumbnails-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .thumbnail {
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
    background-color: #00ccff;
    color: white;
    border: none;
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