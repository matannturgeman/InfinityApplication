import React, { useState, useMemo } from "react";
import { groupBy } from "lodash";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  TabPanelProps,
  GalleryProps,
  Subject,
  Image,
  ImageContainerProps,
  ImageGroup,
} from "../../types/Views/gallery.types";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
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

  const onImageClick = (image) => {
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
      const imagesGroup: ImageGroup = groupBy(subject.images, "group");
      return (
        <TabPanel
          selected={index === selectedTab}
          index={index}
          boxStyles={styles.tabPanelBox}
          style={styles.tabPanel}
          key={subject.name}
        >
          {Object.entries(imagesGroup).map(
            ([group, images]: [string, Image[]]): JSX.Element => (
              <div key={group}>
                <h1 style={styles.title}>{group}</h1>
                <ImagesContainer data={images} onImageClick={onImageClick} />
              </div>
            )
          )}
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
