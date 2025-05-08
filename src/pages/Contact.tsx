import Wrapper from '../ui/components/Wrapper';
import { PageProps } from '../types/props';
import { FC } from 'react';

const Contact: FC<PageProps> = ({ themeStyles }) => {
  return (
    <Wrapper themeStyles={themeStyles}>

      <>
        <h1 className={themeStyles.heading}>CONTACT</h1>
      </>
    </Wrapper>
  );
};

export default Contact;
