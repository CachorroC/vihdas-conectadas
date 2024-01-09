export type Styles = {
  activa: string;
  backCard: string;
  backpulseLinks: string;
  closebtn: string;
  flipCard: string;
  frontCard: string;
  icon: string;
  link: string;
  menu: string;
  myLinks: string;
  openbtn: string;
  sticky: string;
  text: string;
  topnav: string;
  vl: string;
  vl2: string;
};

export type ClassesType = keyof Styles;

declare const styles: Styles;

export default styles;
