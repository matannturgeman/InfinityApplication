import React from "react";
import ImageList from "@mui/material/ImageList";
import { Image, ImagesContainerProps } from "../../types/Views/gallery.types";
import { styles } from "./Gallery.styles";
import ImageContainer from "./ImageContainer";
import { useIsMobile } from "../../hooks/useIsMobile";

const ImagesContainer = ({
  data,
  onImageClick,
  isPointer,
  isTitleDisplayed,
}: ImagesContainerProps): JSX.Element => {
  const isMobile = useIsMobile();
  const imageListStyle = {
    ...styles.imageContainer,
    ...(isMobile || !isTitleDisplayed ? { width: "100%" } : {}),
  };
  return (
    <ImageList
      sx={imageListStyle}
      cols={!isTitleDisplayed && !isMobile ? 5 : 3}
      rowHeight={300}
    >
      {data.map(
        (item: Image): JSX.Element => (
          <ImageContainer
            item={item}
            onImageClick={onImageClick}
            isPointer={isPointer}
            key={`${item.group} - ${item.url}`}
          />
        )
      )}
    </ImageList>
  );
};

export default ImagesContainer;
