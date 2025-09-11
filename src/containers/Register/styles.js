import styled from "@emotion/styled"




export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* Aqui está a correção */
    min-height: 100vh;
    width: 100vw;

    background: linear-gradient(to bottom, #01435eff, #2d51bbff);
    background-size: cover;

    .errors {
        color: red;
        font-size: 14px;
        margin-top: -5px;
        margin-bottom: 5px;
    }
`

export const ContainerItems = styled.div`
    margin:100px 0;
    display: flex;
    flex-direction: column;
    gap:20px;
    background-color: #3366ff;
    border-radius: 8px;
    padding: 10px;
    min-height:400px;
    min-width: 300px;
   

    
    
    
    form {
        flex-direction: column;
        display: flex;

    }
   

    div {
        display: flex;
        flex-direction: column;
        margin: 0 20px;
    }

    

`

export const H1 = styled.h1`
    color: #38c768ff;
    text-align: left;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 20px;
    max-width: 300px;
    line-height: 50px;
    font-weight: 800;

`

export const Span = styled.p`
   color: #FFFFFF;
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





export const SpanFooter = styled.p`
   color: #FFFFFF;
   text-align: center;
   font-size: 14px;
   margin-bottom: 30px;
   margin-top: 20px;

   a {
    text-decoration: none;
    cursor: pointer;
    color: #FFFFFF;
   }
`


