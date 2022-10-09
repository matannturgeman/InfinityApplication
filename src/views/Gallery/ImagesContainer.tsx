import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Image, ImageContainerProps } from "../../types/Views/gallery.types";
import { styles } from "./Gallery.styles";

const ImagesContainer = ({
  data,
  onImageClick,
}: ImageContainerProps): JSX.Element => (
  <ImageList sx={styles.imageContainer} cols={3} rowHeight={164}>
    {data.map((item: Image): JSX.Element => {
      const { url: urlItem } = item;
      const url = require(`../../assets/${urlItem}`);
      return (
        <ImageListItem key={urlItem} onClick={() => onImageClick(item)}>
          <img
            src={`${url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={urlItem.split("/").pop()}
            loading="lazy"
          />
        </ImageListItem>
      );
    })}
  </ImageList>
);

export default ImagesContainer;
