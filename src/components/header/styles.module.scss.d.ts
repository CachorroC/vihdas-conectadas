export type Styles = {
  description: string;
  header: string;
  headericon: string;
  headertexto: string;
  indexIcon: string;
  indexIconCompu: string;
  indexIconMobile: string;
  indexIconTablet: string;
  indexTexto: string;
  indexTextoCompu: string;
  indexTextoMobile: string;
  indexTextoTablet: string;
  ldHeartbeat: string;
  link: string;
  sdb10: string;
  sdb11: string;
  sigaLeyendo: string;
  title: string;
};

export type ClassesType = keyof Styles;

declare const styles: Styles;

export default styles;
