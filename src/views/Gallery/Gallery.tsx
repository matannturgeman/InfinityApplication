import React, { useState, useMemo } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  TabPanelProps,
  GalleryProps,
  Subject,
  Image,
} from "../../types/Views/gallery.types";
import { styles } from "./Gallery.styles";
import ImageGroupContainer from "./ImageGroupContainer";

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const {
    children: images,
    selected,
    index,
    boxStyles = { p: 3 },
    ...restProps
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={!selected}
      id={`gallery-tabpanel-${index}`}
      aria-labelledby={`gallery-tab-${index}`}
      {...restProps}
    >
      {selected && <Box sx={boxStyles}>{images}</Box>}
    </div>
  );
};

const Gallery = (props: GalleryProps) => {
  const {
    view: { subjects },
  } = props;
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newTabIdx: number) => {
    setSelectedTab(newTabIdx);
  };

  const onImageClick = (image: Image) => {
    console.log({ image });
  };

  const renderTabs = () =>
    subjects.map(
      (subject: Subject, index: number): JSX.Element => (
        <Tab value={index} label={subject.label} key={subject.name} />
      )
    );

  const tabs = useMemo(renderTabs, [subjects]);

  const renderTabPanel = () =>
    subjects.map((subject: Subject, index: number): JSX.Element => {
      return (
        <TabPanel
          selected={index === selectedTab}
          index={index}
          boxStyles={styles.tabPanelBox}
          style={styles.tabPanel}
          key={subject.name}
        >
          <ImageGroupContainer
            images={subject.images}
            onImageClick={onImageClick}
          />
        </TabPanel>
      );
    });

  const tabsPanel = useMemo(renderTabPanel, [subjects, selectedTab]);

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
    </Box>
  );
};

export default Gallery;
