import { Scrollbars } from "react-custom-scrollbars-2";
import "./ScrollBar.scss";

const ScrollBar = (props) => {
  const { children: view } = props;

  const renderThumb = ({ style, ...props }) => (
    <div className="scroll-bar" style={style} {...props} />
  );

  return (
    <Scrollbars
      renderThumbVertical={renderThumb}
      renderThumbHorizontal={renderThumb}
    >
      {view}
    </Scrollbars>
  );
};

export default ScrollBar;