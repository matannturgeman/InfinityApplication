import React from "react";
import { ImageContainerProps } from "../../types/Views/gallery.types";
import ImageListItem from "@mui/material/ImageListItem";

const ImageContainer = ({ item, onImageClick, isPointer }: ImageContainerProps) => {
  const { url: urlItem } = item ?? {};
  const url = require(`../../assets/${urlItem}`);
  return (
    <ImageListItem key={urlItem} onClick={() => onImageClick?.(item)} sx={isPointer? { cursor: "pointer" }: {} }>
      <img
        src={`${url}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={urlItem?.split("/")?.pop() ?? ""}
        loading="lazy"
      />
    </ImageListItem>
  );
};

export default ImageContainer;
