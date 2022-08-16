import React, { useState, useMemo } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabPanelProps, GalleryProps, Subject } from '../../types/Views/gallery.types'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const style = {
  GalleryBox: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, rgba(157,157,157,1) 0%, rgba(200,200,203,1) 45%, rgba(255,255,255,1) 100%);'
  },
  TabsBox: {
    borderBottom: 1,
    borderColor: 'divider',
  },
}

const Gallery = (props: GalleryProps) => {
  const { view: { subjects } } = props
  const [selectedTab, setSelectedTab] = useState<string | number | null>(0);

  const handleChange = (event: React.SyntheticEvent, newTabIdx: number) => {
    setSelectedTab(newTabIdx);
  };

  const TabPanel = (props: TabPanelProps) => {
    const { children: images, selected, index, ...restProps } = props;

    return (
      <div
        role="tabpanel"
        hidden={!selected}
        id={`gallery-tabpanel-${index}`}
        aria-labelledby={`gallery-tab-${index}`}
        {...restProps}
      >
        {selected && (
          <Box sx={{ p: 3 }}>
            {images}
          </Box>
        )}
      </div>
    );
  }

  const ImagesContainer = ({ data }) => {
    console.log({ data })
    return <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {data.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  }

  const tabs = useMemo(() => {
    return subjects.map((subject: Subject, index: number): JSX.Element => {
      return <Tab value={index} label={subject.label} />
    })
  }, [subjects])

  const tabsPanel = useMemo(() => {
    return subjects.map((subject: Subject, index: number): JSX.Element => {
      return <TabPanel
        selected={index === selectedTab}
        index={index}>
        <ImagesContainer data={subject.images} />
      </TabPanel>
    })
  }, [subjects, selectedTab])

  return (
    <Box sx={style.GalleryBox}>
      <Box sx={style.TabsBox}>
        <Tabs centered value={selectedTab} onChange={handleChange} aria-label="gallery tabs">
          {tabs}
        </Tabs>
      </Box>
      {tabsPanel}
    </Box>
  );
}

export default Gallery;