import React, { useState } from "react";
import {
  Container,
  GalleryContainer,
  ImageThumbnail,
  ImageWrapper,
  RemoveButton,
  ModalOverlay,
  ModalContent,
  ModalImage,
  CloseButton,
  NavigationArrow,
  DownloadButton,
} from "./styles";

export function ImageContent({ images, newImages = [], onRemoveImage }) {
  const port = 3001;
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allImages = [
    ...(images || []),
    ...newImages.map((file) => ({
      url: URL.createObjectURL(file),
      isNew: true,
    })),
  ];

  const handleImageClick = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImages = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1;
    }

    const image = allImages[newIndex];
    const imageUrl =
      typeof image === "string"
        ? `https://gerenciador-notas-servi-o-back-end.onrender.com/files/${image}`
        : image.url || image;

    setSelectedImage(imageUrl);
    setCurrentIndex(newIndex);
  };

  if (allImages.length === 0) {
    return (
      <Container>
        <h1>Galeria de imagens</h1>
        <p style={{ marginLeft: "35px" }}>Nenhuma imagem disponível</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Galeria de imagens</h1>
      <GalleryContainer>
        {allImages.map((image, index) => {
          const imageUrl =
            typeof image === "string"
              ? `https://gerenciador-notas-servi-o-back-end.onrender.com/files/${image}`
              : image.url || image;

          return (
            <ImageWrapper key={index}>
              <ImageThumbnail
                src={imageUrl}
                alt={`Imagem ${index + 1}`}
                onClick={() => handleImageClick(imageUrl, index)}
              />
              {typeof onRemoveImage === "function" && (
                <RemoveButton
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onRemoveImage(index);
                  }}
                >
                  ×
                </RemoveButton>
              )}
              {image.isNew && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    right: "5px",
                    background: "green",
                    color: "white",
                    padding: "2px 5px",
                    borderRadius: "3px",
                    fontSize: "0.8rem",
                  }}
                >
                  Nova
                </span>
              )}
            </ImageWrapper>
          );
        })}
      </GalleryContainer>

      {selectedImage && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <div>
              <CloseButton onClick={closeModal}>×</CloseButton>
              <DownloadButton
                type="button"
                onClick={async () => {
                  try {
                    const response = await fetch(selectedImage);
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);

                    const link = document.createElement("a");
                    link.href = url;
                    link.download = `imagem-${currentIndex + 1}.jpg`;
                    document.body.appendChild(link);
                    link.click();

                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                  } catch (error) {
                    console.error("Erro ao baixar a imagem:", error);
                  }
                }}
              >
                ⬇
              </DownloadButton>
            </div>
            <NavigationArrow
              direction="left"
              onClick={(e) => {
                e.stopPropagation();
                navigateImages("prev");
              }}
            >
              &#10094;
            </NavigationArrow>
            <ModalImage src={selectedImage} alt="Imagem ampliada" />
            <NavigationArrow
              direction="right"
              onClick={(e) => {
                e.stopPropagation();
                navigateImages("next");
              }}
            >
              &#10095;
            </NavigationArrow>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}
