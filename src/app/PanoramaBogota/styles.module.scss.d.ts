export type Styles = {
  bgta: string;
  cambiaBgta: string;
  cambiaPropHm: string;
  container: string;
  prophm: string;
  texto: string;
};

export type ClassesType = keyof Styles;

declare const styles: Styles;

export default styles;
