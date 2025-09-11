/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react"

function GlobalStyles() {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Roboto", sans-serif;
          outline: none;
          -webkit-tap-highlight-color: transparent; /* Remove o "flash" azul no toque */
          outline: none; /* remove borda azul de foco em elementos clicáveis */ 
             #print-section {
                display: none;
              }

              @media print {
                body * {
                  visibility: hidden;
                }

                

                #print-section, #print-section * {
                  visibility: visible;
                  display: block;
                }

                #print-section {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  background: white;
                  padding: 20px;
                  box-sizing: border-box;
                }

                .print-page {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  height: 100%;
                }

                .print-copy {
                  display: flex;
                  flex-direction: row;
                  border: 1px dashed #000;
                  padding: 10px;
                  height: 48%;
                  margin-bottom: 10px;
                  page-break-inside: avoid;
                }

                .descricao {
                  border: 1px solid #000;
                  padding: 5px;
                  min-height: 60px;
                  margin: 10px 0;
                }

                #side-menu {
                  display: none !important;
                }

                p {
                  display: flex;
                  flex-direction: row;
                }
              } 


           
              }
            `}
          />
        )
      }

export default GlobalStyles