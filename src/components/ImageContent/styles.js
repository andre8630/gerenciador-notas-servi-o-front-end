import styled from "@emotion/styled"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-top: 20px;
    margin-left:20px;
    h1 {
        font-size: 22px;
        font-weight: 800;
        color: #38c768 ;
        text-align: center;
    }

    p {
        color: #363636ff;
        margin: 50px 0;
        font-size: 14px;
        text-align: center;
        margin: 50px 0;
    }
`

export const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
   
   
    
    
`

export const ImageWrapper = styled.div`

    position: relative;
    /* Mantém proporção quadrada */
    align-self: center;
    overflow: hidden;
    width: 80px;
    height: 80px;
`

export const ImageThumbnail = styled.img`
   
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 80px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 4px;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);
    }
`

export const RemoveButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background: red;
    color: white;
    border: none;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    font-size: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  background-color: rgba(0, 0, 0, 0.8);
  
`;

export const ModalContent = styled.div`

  max-width: 90%;
  max-height: 90%;
  background: white;
  padding: 20px;
  border-radius: 8px;
 
`;

export const ModalImage = styled.img`
  max-width: 80vw;
  max-height: 80vh;
  object-fit: contain;
`;

export const CloseButton = styled.button`
  position: absolute;
  top:0;
  right: 0;
  margin-top:30px;
  margin-right:30px;
  background: #ff4444;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  z-index: 1001;
  
  &:hover {
    opacity: 0.8;
  }
`

export const DownloadButton = styled.button`
  position: absolute;
  margin-top:3px;
  margin-left:3px;
  /* espaço para ficar ao lado do fechar */
  background: #38c768;
  color: white;
  border: none;
  width: 50px;
  height: 30px;
  border-radius:10px;
  font-size: 28px;
  font-weight: 900;
  cursor: pointer;
  z-index: 1001;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #2e9d54;
  }
`



export const NavigationArrow = styled.div`
  position: absolute;
  top: 50%;
  ${({ direction }) => direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
  transform: translateY(-50%);
  color: white;
  font-size: 2rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  user-select: none;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`












// export const WhatsAppButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 50px; /* Posicionado à esquerda do botão de fechar */
//   background: #25D366;
//   color: white;
//   border: none;
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
//   cursor: pointer;
//   z-index: 1001;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.3s ease;
  
//   &:hover {
//     background: #128C7E;
//     transform: scale(1.1);
//   }
  
//   &::before {
//     content: "";
//     display: inline-block;
//     width: 20px;
//     height: 20px;
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884'/%3E%3C/svg%3E");
//     background-size: contain;
//     background-repeat: no-repeat;
//   }
// `