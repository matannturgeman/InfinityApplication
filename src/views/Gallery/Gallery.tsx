import React, { useState, useMemo } from "react";
import { groupBy } from "lodash";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  TabPanelProps,
  GalleryProps,
  Subject,
} from "../../types/Views/gallery.types";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const styles = {
  GalleryBox: {
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, rgba(157,157,157,1) 0%, rgba(200,200,203,1) 45%, rgba(255,255,255,1) 100%);",
  },
  TabsBox: {
    borderBottom: 1,
    borderColor: "divider",
  },
  title: {
    color: "black",
    fontSize: 16,
    textTransform: "capitalize",
    margin: "0px 0 12px 0",
    textAlign: "center",
  },
  imageContainer: { width: 500, height: "90%" },
  groupContainer: {},
  tabPanelBox: {
    display: "flex",
    gap: 23,
    height: "100%",
  },
  tabPanel: { marginTop: 12, height: "100%" },
} as any;

const ImagesContainer = ({ data }) => (
  <ImageList sx={styles.imageContainer} cols={3} rowHeight={164}>
    {data.map(({ url: urlItem }) => {
      const url = require(`../../assets/${urlItem}`);
      return (
        <ImageListItem key={urlItem}>
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

const TabPanel = (props: TabPanelProps) => {
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
  const [selectedTab, setSelectedTab] = useState<string | number | null>(0);

  const handleChange = (event: React.SyntheticEvent, newTabIdx: number) => {
    setSelectedTab(newTabIdx);
  };

  const tabs = useMemo(() => {
    return subjects.map((subject: Subject, index: number): JSX.Element => {
      return <Tab value={index} label={subject.label} />;
    });
  }, [subjects]);

  const tabsPanel = useMemo(
    () =>
      subjects.map((subject: Subject, index: number): JSX.Element => {
        const imagesGroup = groupBy(subject.images, "group");
        return (
          <TabPanel
            selected={index === selectedTab}
            index={index}
            boxStyles={styles.tabPanelBox}
            style={styles.tabPanel}
          >
            {Object.entries(imagesGroup).map(([group, images]) => (
              <div key={group}>
                <h1 style={styles.title}>{group}</h1>
                <ImagesContainer data={images} />
              </div>
            ))}
          </TabPanel>
        );
      }),
    [subjects, selectedTab]
  );

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
