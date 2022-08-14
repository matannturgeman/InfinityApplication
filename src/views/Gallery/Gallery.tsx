import React, { useState, useMemo } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabPanelProps, GalleryProps, Subject } from '../../types/Views/gallery.types'

const style = {
  GalleryBox: { width: '100%' },
  TabsBox: { borderBottom: 1, borderColor: 'divider' },
}

const Gallery = (props: GalleryProps) => {
  const { view: { subjects } } = props

  const [selectedTab, setSelectedTab] = useState<string | number | null>(0);

  const handleChange = (event: React.SyntheticEvent, newTabIdx: number) => {
    setSelectedTab(newTabIdx);
  };

  const getTabProps = (tab: Subject, index: number) => ({
    value: index,
    label: tab.label,
    id: `gallery-tab-${tab.id}`,
    'aria-controls': `gallery-tabpanel-${tab.id}`,
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

  const tabs = useMemo(() => {
    return subjects.map((subject: Subject, index: number): JSX.Element => {
      return <Tab {...getTabProps(subject, index)} />
    })
  }, [subjects])

  const tabsPanel = useMemo(() => {
    return subjects.map((subject: Subject, index: number): JSX.Element => {
      return <TabPanel
        selected={index === selectedTab}
        index={index}>
        <ImagesContainer data={subject} />
      </TabPanel>
    })
  }, [subjects, selectedTab])

  return (
    <Box sx={style.GalleryBox}>
      <Box sx={style.TabsBox}>
        <Tabs value={selectedTab} onChange={handleChange} aria-label="gallery tabs">
          {tabs}
        </Tabs>
      </Box>
      {tabsPanel}
    </Box>
  );
}

export default Gallery;