export interface Image {
  url: string;
  group: string;
}

export interface Subject {
  id: number | string;
  name: string;
  label: string;
  images: Image[];
}

export interface Data {
  subjects: Subject[];
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  selected: boolean;
  boxStyles?: any;
  style?: any;
  name?: string;
}

export interface GalleryProps {
  children?: React.ReactNode;
  view: Data;
}

export type onImageClickType = (image: Image | null) => void;

export interface ImagesContainerProps {
  data: Image[];
  onImageClick: onImageClickType;
  isPointer: boolean;
}

export interface ImageGroup {
  [group: string]: Image[];
}

export interface ImageGroupContainerProps {
  images: Image[];
  onImageClick: onImageClickType;
}

export interface ImageModalProps {
  selectedImage: Image | null;
  onClose: () => void;
}

export interface ImageContainerProps {
  item: Image | null;
  onImageClick: onImageClickType | null;
  isPointer: boolean;
}