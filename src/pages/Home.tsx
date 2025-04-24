import { ThemeStyles } from '../types/themeStyles';
import { FC } from 'react';

interface HomeProps {
  themeStyles: ThemeStyles;
}

const Home: FC<HomeProps> = ({ themeStyles }) => {
  return (
    <>
      <h1 className={themeStyles.heading}>HOME</h1>
    </>
  );
};

export default Home;
