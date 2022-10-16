import { useWindowWidth } from "./useWindowWidth";
import { MOBILE_WIDTH_BRAKEPOINT } from "../constants/utils.constants";

export const useIsMobile = (breakpoint = MOBILE_WIDTH_BRAKEPOINT) => {
  const [width] = useWindowWidth();
  return breakpoint > width;
};
