import styled from "@emotion/styled"




export const Container = styled.div`
    background: #e5e5e5;
    min-height: 100vh;
    width: 100vw;


   
`

export const ContainerItems = styled.div`
    margin-left: 350px;
    
    display: flex;
    flex-direction: column;
    padding: 20px;
    
    align-items: start;
   
    
    
    cursor: pointer;


    @media (max-width: 768px) {
         margin: 0;
         padding: 0;
         gap: 0;
         max-width: 100%;
         justify-content: center;
        
     }
     

   

    
    
    
    form {
        align-items:center;
        display: flex;
        flex-direction: column;
        gap:10px;
        padding: 30px;
        

    }
   

    div {
        margin: 0 20px;

        .errors {
            color: red;
            font-size: 14px;
            margin-top: -5px;
            margin-bottom: 5px;
        }
    }

    

`

export const H1 = styled.h1`
    color: #38c768ff;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 40px;
    margin-left: 55px;
    max-width: 273px;
    line-height: 50px;
    font-weight: 800;
    align-self: left;
    
     @media (max-width: 768) {
      align-self: center;
    }

`

export const Span = styled.p`
   color: #474646ff;
   margin-bottom: 2px;
`

export const Input = styled.input`
    box-shadow: 3px 3px 10px 0px #4A90E230;
    width: 280px;
    height: 40px;
    opacity: 1;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 16px;
    border: none;
    margin-bottom: 10px;
`


export const LabelUpload = styled.label`
 background: #38c768ff;
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #FFFFFF;
    z-index: 1000;
    border: 2px dashed #FFFFFF;
    flex-direction: column;
    gap: 15px;
    
    margin-top: 30px;
    margin-bottom: 50px;
    width: 280px;
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

  

`

export const Button = styled.button`
    background-color: #00ccff;
    color: white;
    border: none;
    border-radius: 8px;
    width: 280px;
    height: 40px;
    font-size: 18px;
    cursor: pointer;
    
    margin-top: 40px;
    align-self: center;
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



export const Logo = styled.div`
  margin-bottom: 35;
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px; // Espaço entre logo e texto no mobile
  }

  img {
    width: 120px; // Reduz um pouco o tamanho
    height:120px;
    border-radius: 100%;
    cursor: pointer;
    object-fit: cover; // Garante que a imagem não fique distorcida
    
    
  }
`