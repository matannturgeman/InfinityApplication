import React from "react";
import { groupBy } from "lodash";
import {
  Image,
  ImageGroup,
  ImageGroupContainerProps,
} from "../../types/Views/gallery.types";
import { styles } from "./Gallery.styles";
import ImagesContainer from "./ImagesContainer";

const ImageGroupContainer = ({
  images,
  onImageClick,
}: ImageGroupContainerProps): JSX.Element => {
  const imagesGroup: ImageGroup = groupBy(images, "group");
  return (
    <>
      {Object.entries(imagesGroup).map(
        ([group, images]: [string, Image[]]): JSX.Element => {
          const isTitleDisplayed = !["undefined", "null", ""].includes(group);
      
          return (
            <div key={group}>
              {isTitleDisplayed && <h1 style={styles.title}>{group}</h1>}
              <ImagesContainer
                data={images}
                onImageClick={onImageClick}
                isPointer
                isTitleDisplayed={isTitleDisplayed}
              />
            </div>
          );
        }
      )}
    </>
  );
};

export default ImageGroupContainer;
