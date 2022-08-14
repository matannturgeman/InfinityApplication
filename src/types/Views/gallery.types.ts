  
 export interface Subject {
  id: number | string;
  name: string;
  label: string;
  images: string[];
}

export interface Data {
  subjects: Subject[];
}

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    selected: boolean;
  }
  
 export  interface GalleryProps {
    children?: React.ReactNode;
    view: Data;
  }
