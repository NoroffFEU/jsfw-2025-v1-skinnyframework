import { ThemeStyles } from '../types/themeStyles';
import { FC } from 'react';

interface ContactProps {
  themeStyles: ThemeStyles;
}

const Contact: FC<ContactProps> = ({ themeStyles }) => {
  return (
    <>
      <h1 className={themeStyles.heading}>CONTACT</h1>
    </>
  );
};

export default Contact;
