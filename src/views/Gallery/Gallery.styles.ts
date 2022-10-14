export const styles = {
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
  imageContainer: {
    width: 500,
    height: "90%",
    ["@media (max-width:768px)"]: { // eslint-disable-line no-useless-computed-key
      height: "100%",
    },
  },
  groupContainer: {},
  tabPanelBox: {
    display: "flex",
    gap: 23,
    height: "93%",
    ["@media (max-width:768px)"]: { // eslint-disable-line no-useless-computed-key
      flexDirection: "column",
      overflowY: "auto"
    },
  },
  tabPanel: {
    marginTop: 12,
    height: "100%",
    padding: "20px",
  },
  imageListItem: {
    ["@media (max-width:768px)"]: { // eslint-disable-line no-useless-computed-key
      overflowY: "none",
    },
  },
  pointer: { cursor: "pointer" }
} as any;
