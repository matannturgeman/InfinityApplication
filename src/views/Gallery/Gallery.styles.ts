import { MOBILE_WIDTH_BRAKEPOINT } from "../../constants/utils.constants";

export const styles = {
  GalleryBox: {
    width: "100%",
    height: "89.5%",
    marginTop: "auto",
    background:
      "linear-gradient(90deg, rgba(157,157,157,1) 0%, rgba(200,200,203,1) 45%, rgba(255,255,255,1) 100%);",
    [`@media (max-width:${MOBILE_WIDTH_BRAKEPOINT}px)`]: {
      height: "91%",
    },
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
  imageContainer: {
    height: "90%",
    [`@media (max-width:${MOBILE_WIDTH_BRAKEPOINT}px)`]: {
      height: "100%",
    },
    "&::-webkit-scrollbar": {
      visibility: "hidden",
      width: 0,
    },
  },
  groupContainer: {
    "&::-webkit-scrollbar": {
      visibility: "hidden",
      width: 0,
    },
  },
  tabPanelBox: {
    display: "grid",
    gridTemplateRows: "100%",
    gridAutoFlow: "column",
    gap: 5,
    height: "93%",
    [`@media (max-width:${MOBILE_WIDTH_BRAKEPOINT}px)`]: {
      overflowY: "auto",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "repeat(3, 1000px)",
    },
    "&::-webkit-scrollbar": {
      visibility: "hidden",
      width: 0,
    },
  },
  tabPanel: {
    marginTop: 12,
    height: "100%",
    padding: "20px",
  },
  imageListItem: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",

    [`@media (max-width:${MOBILE_WIDTH_BRAKEPOINT}px)`]: {
      overflowY: "none",
    },
  },
  ImageGroup: {
    "&::-webkit-scrollbar": {
      visibility: "hidden",
      width: 0,
    },
  }
} as any;
