import React, { useState, useEffect } from "react";
import { ImageContainerProps } from "../../types/Views/gallery.types";
import ImageListItem from "@mui/material/ImageListItem";
import { styles } from "./Gallery.styles";
import { styles as viewsStyles } from "../Views.styles";

const imageCache: { [key: string]: string } = {};

const ImageContainer: React.FC<ImageContainerProps> = ({
  item,
  onImageClick,
  isPointer,
}) => {
  const { url: urlItem } = item ?? {};
  const pointerStyles = isPointer ? viewsStyles.pointer : {};
  const sx = { ...styles.imageListItem, ...pointerStyles };

  const [imgSrc, setImgSrc] = useState("");
  const [imgSrcSet, setImgSrcSet] = useState("");

  useEffect(() => {
    if (!urlItem) return;
    if (!imageCache[urlItem]) {
      imageCache[urlItem] = require(`../../assets/${urlItem}`);
    }

    setImgSrc(`${imageCache[urlItem]}?w=164&h=164&fit=crop&auto=format`);
    setImgSrcSet(
      `${imageCache[urlItem]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`
    );
  }, []);

  return (
    <ImageListItem key={urlItem} onClick={() => onImageClick?.(item)} sx={sx}>
      {imgSrc && (
        <img
          src={imgSrc}
          srcSet={imgSrcSet}
          alt={urlItem?.split("/")?.pop() ?? ""}
          loading="lazy"
        />
      )}
    </ImageListItem>
  );
};

export default ImageContainer;
