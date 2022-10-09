import React from "react";
import { ImageModalProps } from "../../types/Views/gallery.types";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ImageContainer from "./ImageContainer";
import { styles } from "./ImageModal.styles";

function ImageModal({ selectedImage, onClose }: ImageModalProps) {
  return (
    <Modal
      open={!!selectedImage}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles}>
        <ImageContainer
          item={selectedImage}
          onImageClick={null}
          isPointer={false}
        />
      </Box>
    </Modal>
  );
}

export default ImageModal;
