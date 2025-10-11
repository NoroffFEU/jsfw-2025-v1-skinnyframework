import { FC, ReactNode } from 'react';
import { PageProps } from 'types/props';

type MainProps = PageProps & {
  children: ReactNode;
};

const Main: FC<MainProps> = ({ themeStyles, children }) => {
  return <main className={themeStyles.main}>{children}</main>;
};

export default Main;
