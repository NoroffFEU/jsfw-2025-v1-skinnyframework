import { PageProps } from '../types/props';
import { FC } from 'react';

const Home: FC<PageProps> = ({ themeStyles }) => {
  return (
    <>
      <h1 className={themeStyles.heading}>HOME</h1>
    </>
  );
};

export default Home;
