export type Styles = {
  container: string;
  texto: string;
};

export type ClassesType = keyof Styles;

declare const styles: Styles;

export default styles;
