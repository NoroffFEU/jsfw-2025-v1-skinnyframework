import { PageProps } from '../types/props';
import { FC } from 'react';

const Contact: FC<PageProps> = ({ themeStyles }) => {
  return (
    <>
      <h1 className={themeStyles.heading}>CONTACT</h1>
    </>
  );
};

export default Contact;
