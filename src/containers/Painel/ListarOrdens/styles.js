import styled from "@emotion/styled"
import Select from 'react-select'
import { Button } from "../../../components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
`


 export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    
    margin-left: 300px; /* Largura do menu */
    
    background: #FFFFFF;
    cursor: pointer;

    .table-container {
        background: #c0d1c5ff;
        margin-top: 80px;
        font-size:20px;
        
        
    }

    .table {
        
        color: #12248aff;
    }
    .tableValue {
        color: #242424ff;
    }

     @media (max-width: 768px) {
         margin: 0;
         padding: 0;
         gap: 0;
         max-width: 100%;
     }

`



export const Header = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-top: 18px;
  margin-bottom: 20px;
  margin-right: 10px;
`

export const Input = styled.input`
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 135px;
  height: 36px;
  
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #00ccff;
  }
`

export const SearchButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  min-width: 60px;
  height: 36px;
  border: none;
  border-radius: 6px;
  background-color: #00ccff;
  color: white;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #0099cc;
  }
`



export const ClearButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  min-width: 60px;
  height: 36px;
  border: none;
  border-radius: 6px;
  background-color: #00ccff;
  color: white;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #0099cc;
  }
`










// export const Container = styled.div`
//     display: flex;
//     flex-direction: row;
//     min-height: 100vh;
//     width: 100vw;
//     background: #e5e5e5;
// `
// export const ContentContainer = styled.div`
//     flex: 1;
//     padding: 20px;
//     margin-left: 300px; /* Largura do menu */

//     @media (max-width: 768px) {
//         margin-left: 0;
//     }

// `
// export const PainelOrdens = styled.div `
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr ;
// 	grid-auto-columns: 50px 100px;
    
//     background: #817e7eff;
//     border-radius: 20px;
//     gap: 20px;
//     padding: 30px;
//     margin-bottom: 40px;
// `

// export const PainelItem = styled.div `
//     display: flex;
//     flex-direction: column;
//     background-color: #aca9a9ff;
//     width: 200px;
//     border-radius: 20px;
//     text-align: center;

// `

// export const LabelName = styled.p `
//     color: #FFFFFF;
//     font-size: 18px;
//     margin-top: 10px;

// `
// export const LabelValue = styled.p `
//     font-size: 18px;
//     margin-top: 30px;
// `

