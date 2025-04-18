const Wrapper = ({ children, themeStyles }) => {
    return <div className={themeStyles.wrapper}>{children}</div>;
  };
  
  export default Wrapper;