// this tells typescript that we are using css modules
// and that the class names will be strings
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
