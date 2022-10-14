import React, { useState, useMemo } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  GalleryProps,
  Subject,
  Image,
} from "../../types/Views/gallery.types";
import TabPanel from "../../components/TabPanel/TabPanel";
import ImageGroupContainer from "./ImageGroupContainer";
import ImageModal from "./ImageModal";
import { styles } from "./Gallery.styles";

const Gallery = (props: GalleryProps) => {
  const {
    view: { subjects },
  } = props;
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleChange = (event: React.SyntheticEvent, newTabIdx: number) => {
    setSelectedTab(newTabIdx);
  };

  const onImageClick = (image: Image | null) => {
    setSelectedImage(image);
  };

  const renderTabs = () =>
    subjects.map(
      (subject: Subject, index: number): JSX.Element => (
        <Tab value={index} label={subject.label} key={subject.name} />
      )
    );

  const tabs = useMemo(renderTabs, [subjects]);

  const renderTabPanel = () =>
    subjects.map(
      (subject: Subject, index: number): JSX.Element => (
        <TabPanel
          selected={index === selectedTab}
          index={index}
          boxStyles={styles.tabPanelBox}
          style={styles.tabPanel}
          key={subject.name}
          name="gallery"
        >
          <ImageGroupContainer
            images={subject.images}
            onImageClick={onImageClick}
          />
        </TabPanel>
      )
    );

  const tabsPanel = useMemo(renderTabPanel, [subjects, selectedTab]);

  const onCloseImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <Box sx={styles.GalleryBox}>
      <Box sx={styles.TabsBox}>
        <Tabs
          centered
          value={selectedTab}
          onChange={handleChange}
          aria-label="gallery tabs"
        >
          {tabs}
        </Tabs>
      </Box>
      {tabsPanel}
      <ImageModal selectedImage={selectedImage} onClose={onCloseImageModal} />
    </Box>
  );
};

export default Gallery;
