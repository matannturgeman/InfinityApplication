import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  selected: boolean;
}

interface GalleryProps {
  children?: React.ReactNode;
  view: any;
}

const style = {
  GalleryBox: { width: '100%' },
  TabsBox: { borderBottom: 1, borderColor: 'divider' },
}


const getTabProps = (tab: any, index: number) => ({
  value: tab.name,
  label: tab.label,
  id: `gallery-tab-${index}`,
  'aria-controls': `gallery-tabpanel-${index}`,
})

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

const ImagesContainer = ({ data }) => <div>{data.name}</div>

const renderTabs = (subjects: Array<Object>) => subjects.map((subject: any, index: number) => (<Tab {...getTabProps(subject, index)} />))

const renderTabsPanels = (subjects: Array<Object>, tab: string) => {
  return subjects.map((subject: any, index: number): JSX.Element => {
    return <TabPanel
      selected={subject.name === tab}
      index={index}>
      <ImagesContainer data={subject} />
    </TabPanel>
  })
}

const Gallery = (props: GalleryProps) => {
  const { view: { subjects: tabs } } = props

  const [selectedTab, setSelectedTab] = useState(tabs[0].name);

  const handleChange = (event: React.SyntheticEvent, newTab: number) => {
    setSelectedTab(newTab);
  };

  return (
    <Box sx={style.GalleryBox}>
      <Box sx={style.TabsBox}>
        <Tabs value={selectedTab} onChange={handleChange} aria-label="gallery tabs">
          {renderTabs(tabs)}
        </Tabs>
      </Box>
      {renderTabsPanels(tabs, selectedTab)}
    </Box>
  );
}

export default Gallery;