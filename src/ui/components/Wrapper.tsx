import { FC } from "react";
import { WrapperProps } from "types/props";

const Wrapper: FC<WrapperProps> = ({ children, themeStyles }) => {
  return <div className={themeStyles.wrapper}>{children}</div>;
};

export default Wrapper;
