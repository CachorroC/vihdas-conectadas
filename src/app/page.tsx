'use client';
import { CardMenu } from '#@/components/navigation/card-menu';
import styles from '#@/styles/page.module.css';
import { useSigaLeyendoContext } from './context/siga-leyendo-context';

export default function Home () {

      const textoRef= useSigaLeyendoContext();


      return (

        <div className={ styles.container }>
          <div className={ styles.texto } ref={textoRef}>

            <h1><strong>VIHdas Conectadas:</strong> aportes a la normativa digital para la
					desestigmatización del VIH</h1>

            <p>Esta iniciativa nace a partir de la necesidad de Identificar balances y
					desequilibrios en la información y acceso a los mecanismos de mitigación del VIH
					existentes en el Distrito Capital, como un aporte a la política pública
					distrital existente enfocada en la población de hombres que tienen sexo con
					hombres (HSH) que disfrutan las prácticas sexuales de riesgo. Se crea. Partir de
					la necesidad de tener las herramientas de VIH a la mano y disponible para todas,
					en donde el ciudadano sea quién decida cómo protegerse del virus, aportando a la
					des estigmatización de la población seropositiva y de aquellos hombres que
					disfrutan y gozan de estas prácticas sexuales. Los hombres que tienen sexo con
					hombres existimos y no dejaremos de luchar por nuestros derechos. </p>
            <p>A continuación, podrás navegar a través de nuestro sitio web en donde encontrarás
					todo lo que debes saber acerca del virus del VIH y algunas estrategias para
					mitigarlo.
            </p>
            <p>¡Bienvenides!</p>

          </div>
          <CardMenu />
        </div>

      );
}
