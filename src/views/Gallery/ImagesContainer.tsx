import React from "react";
import ImageList from "@mui/material/ImageList";
import { Image, ImagesContainerProps } from "../../types/Views/gallery.types";
import { styles } from "./Gallery.styles";
import ImageContainer from "./ImageContainer";

const ImagesContainer = ({
  data,
  onImageClick,
  isPointer,
}: ImagesContainerProps): JSX.Element => (
  <ImageList sx={styles.imageContainer} cols={3} rowHeight={164}>
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

export default ImagesContainer;
