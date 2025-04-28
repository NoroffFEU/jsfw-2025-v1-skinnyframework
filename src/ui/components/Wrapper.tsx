import { FC } from "react";

interface WrapperProps {
  children: React.ReactNode;
  themeStyles: { [key: string]: string };
}

const Wrapper: FC<WrapperProps> = ({ children, themeStyles }) => {
  return <div className={themeStyles.wrapper}>{children}</div>;
};

export default Wrapper;
