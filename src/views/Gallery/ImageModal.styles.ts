export const styles = {
  box: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "80vh",
    display: "flex",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    justifyContent: "center",
    ["@media (max-width:768px)"]: { // eslint-disable-line no-useless-computed-key
      width: "85vw",
      padding: "10px",
    },
  },
  closeIcon: {
    position: "absolute",
    right: 7,
    top: 7,
    cursor: "pointer",
    ["@media (max-width:768px)"]: { // eslint-disable-line no-useless-computed-key
      display: "none"
    },
  },
};
