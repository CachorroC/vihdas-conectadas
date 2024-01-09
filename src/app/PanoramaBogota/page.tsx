'use client';
import Link from 'next/link';
import styles from './styles.module.css';
import { useSigaLeyendoContext } from '../context/siga-leyendo-context';
import { Timeline } from '#@/components/timeline';
import { CardMenu } from '#@/components/navigation/card-menu';

export default function Page() {
      const textoRef = useSigaLeyendoContext();
      return (
        <div className={styles.container}>
          <div
            className={styles.texto}
            ref={textoRef}
          >
            <h1>
              {' '}
          Situación actual: <i>Panorama Bogotá.</i>
            </h1>
            <p>
          El panorama general de la epidemia del
              {/* <span className="tooltip"
                        title="Virus de la Inmunodeficiencia Humana">VIH</span> */}{' '}
          en el distrito capital ha estado enmarcado por una
          serie de políticas públicas que se han ajustado a
          las necesidades de las poblaciones más
          vulnerables. Crear un análisis alrededor de la
          situación actual de la capital del país frente al
          VIH supone una revisión de la historia cercana del
          virus y su comportamiento. “El VIH/Sida es un
          evento de interés en Salud Pública y todo caso
          confirmado debe ser notificado de forma individual
          semanalmente a través del Sistema de Vigilancia en
          Salud Pública (SIVIGILA)” (Secretaría Distrital de
          Salud, 2020a, p. 1) . A pesar de los múltiples
          intentos de la secretaría de salud y el gobierno
          por reducir las tasas de contagio y lograr las
          metas frente al virus, este ha mantenido un
          crecimiento constante en los últimos diez años.{' '}
            </p>
            <p>
          El informe preliminar del segundo trimestre de la
          situación actual del VIH en la capital data a 17
          personas infectadas por cada 100mil habitantes en
          el 2010. Mientras que el último trimestre del 2019
          se cerró con 48 personas contagiadas por cada
          100mil habitantes (Secretaría Distrital de Salud,
          2020b, p. 2). Se duplicó la cifra en nueve años,
          se triplicará una vez culmine el presente año.{' '}
            </p>
          </div>

          <div className={styles.bgta}></div>
          <div className={styles.texto}>
            {/*   <div id="juxta">
              <iframe  className="juxtapose"
                        src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=1a2a12e4-b04f-11eb-b7bf-95443c729a29"></iframe>
                </div> */}
            <p>
          En el primer trimestre del 2017 se registraron 673
          casos nuevos de VIH en la ciudad de Bogotá un
          incremento del 2,5% con respecto al total de casos
          confirmados existentes en la ciudad desde 1985
          (Secretaría Distrital de Salud, 2017). Durante el
          primer trimestre del 2018 se registraron 772 casos
          nuevos (Secretaría Distrital de Salud, 2018, p.
          2). Se registraron 993 casos al año siguiente
          (Secretaría Distrital de Salud, 2019b, p. 2).
          Desde el 1 de enero hasta el 31 de marzo del 2020,
          en el primer trimestre del año, registramos 1.115
          casos confirmados de VIH. En cuatro años ha habido
          un incremento exponencial de la relación de casos
          con respecto al año anterior.{' '}
            </p>
            <p>
          En promedio cada año hubo un incremento de casi
          1000 casos po sitivos sobre el promedio del
          anterior año. Mientras el 2017 lo cerramos con
          2321casos nuevos en la ciudad. En el año 2018 y
          2019 con 3395 y 4604 casos nuevos respectivamente.
          En promedio 55 bogotanos contrajeron VIH por cada
          100 mil habitantes. Esta cifra, sube y sube y no
          deja de subir. El 88% de los casos registrados son
          hombres.
            </p>
            <p>
          Aunque el 90% de los encuestados afirma haber
          tenido algún tipo de información o pedagogía
          acerca del VIH, solamente el 58% sabe qué es la
          profilaxis pos-exposición.{' '}
            </p>
            <p>
          Por su parte el distrito está aplicando una serie
          de estrategias que buscan mitigar la prevalencia
          del virus a través de todos los actores
          implicados. Existe la estrategia de Ponte a
          Prueba, “la cual está encaminada a la prevención
          del VIH e ITS y el diagnóstico oportuno de estos
          eventos en el Distrito Capital, así como la
          disminución del estigma y la discriminación
          específicamente en poblaciones con alta
          vulnerabilidad” (Salud Colectiva, Gaitán,
          Castiblanco, & Caicedo, 2019, p. 2).
            </p>
            <p>
          El Plan de Salud Pública de Intervenciones
          Colectivas (PSPIC) cuenta con una serie de
          acciones integrales desarrolladas en los
          diferentes espacios de vida cotidiana por parte de
          los equipos de salud de las subredes quienes son
          entrenados y capacitados para el abordaje de las
          poblaciones claves tendientes a mejorar la salud y
          calidad de vida de la población de mayor
          vulnerabilidad, en aras de dar respuesta entre
          ellos a la epidemia del VIH en la Ciudad (Salud
          Colectiva et al., 2019, p. 2).
            </p>
            <p>
          Dentro de las acciones que resalta el derecho de
          petición se encuentra la entrega de condones
          masculinos gratuitos en espacios promocionales y
          preventivos de
              {/* <span className="tooltip" title="Infecciones de Transmisión Sexual">ITS</span> */}{' '}
          con énfasis en poblaciones vulnerables. Resalta
          las intervenciones que se realizan a la población
              {/* <span className="tooltip" title="El grupo poblacional de Lesbianas, Gays, Bisexuales, Transgénero,
												Transexuales, Travestis, Transgeneristas e Intersexuales/ Queer.">
                        LGBTI
                    </span>, */}{' '}
          pero no hace énfasis en los grupos poblacionales
          más vulnerables de esta población: los hombres que
          tienen sexo con hombres y las mujeres
          transgéneras. Es de especial relevancia hacer la
          diferencia entre estos subgrupos poblacionales
          pues los índices de contagio no son comparables
          entre las siglas. El VIH no tiene la misma
          incidencia que tiene en los hombres gais y en la
          creación de sus políticas públicas. Distintas
          opresiones configuran las necesidades específicas
          de cada uno. “Entre los años 2009 y 2019 a razón
          hombre-mujer ha sido de 6,5 hombres por cada mujer
          notificada con VIH” (Secretaría Distrital de
          Salud, 2019a, p. 7).
            </p>
          </div>

          <div className={styles.prophm}></div>
          <div className={styles.texto}>
            <p>
          Por parte del PSPIC también se realizan
          asistencias técnicas a docentes desde el
          componente{' '}
              {/* <span
                        className="tooltip" title="<ol>
														<li>Reproductiva</li>
														<li>Procreativa</li>
														<li>Erótica</li>
														<li>Relacional</li>
														<li>Comunicacional</li>
														<li>El abordaje del tema con niños, niñas, adolescentes y jóvenes </li>
														<li>La apropiación de los derechos sexuales y reproductivos como medio
																para la construcción de ciudadanía y la convivencia pacífica</li>
												</ol>">Amarte</span> */}{' '}
          , en los temas de salud sexual y reproductiva.
          Existen además distintos dispensadores de condones
          en la ciudad, en aras de sensibilizar a las
          poblaciones en el acceso al diagnóstico de
          VIH-ITS, identificación y seguimiento a barreras
          de acceso y tratamiento oportuno para modificar
          positivamente las condiciones que determinan la
          calidad de vida desde el modelo de atención
          diferencial reconociendo la vulnerabilidad y
          problemáticas de este grupo poblacional (Salud
          Colectiva et al., 2019, p. 3).{' '}
            </p>
            <p>
          Claro está que estos dispensadores llevan más de
          cuatro años vacíos. En los baños del parque
          nacional, en el CAIDSG - Sebastián Romero, en los
          centros comerciales cerca a Lourdes al igual que
          en distintos sitios de sexo (en) público se
          colocaron estos dispensadores. En alianza con
          Profamilia durante la administración Petro se
          otorgaban condones marca MCP a estos sitios de
          encuentros sexuales. Posteriormente con el primer
          mandato de Peñaloza empezaron a repartir condones
          Tulip y no se volvieron a llenar los dispensadores
          públicos, solamente se hacía entrega a los
          establecimientos de comercio sexual. A la fecha en
          la mayoría de establecimientos los condones tienen
          un costo, pues el distrito dejó de repartir los
          condones gratuitos a la población vulnerable. Ya
          se le envió un requerimiento a la Secretaría de
          Salud preguntando sobre la alianza junto a
          profamilia y a la fecha no han dado respuesta.{' '}
            </p>
            <p>
          El PSPIC también cuenta con la coordinación de
          encuentro de liderazgo de la Red Distrital
          VIH-SIDA que se crea a partir del Acuerdo 143 de
          2005 como una via de información y de acceso para
          todos los sectores del VIH. La incidencia de la
          red está representada más en los centros de
          atención en salud. Pero, no en las poblaciones
          vulnerables y en su comunicación. “con la
          participación de profesionales de la Salud que
          hderan los programas en las EAPB s o Instituciones
          Promotoras de Salud en VIH” (Salud Colectiva et
          al., 2019, p. 4).
            </p>

            <Timeline />

            <p id='pienso-excito'>
          Por su parte, la Secretaría Distrital de Salud
          creó la campaña comunicativa de{' '}
              <Link
                href='http://www.saludcapital.gov.co/Paginas2/Pienso_luego_excito.aspx'
                target='_blank'
              >
            Pienso, luego excito
              </Link>
          , la cual busca promover una sexualidad saludable
          y segura mediante tres ejes. Promoción de pruebas
          para detectar infecciones de transmisión sexual
          (ITS), prevención de su transmisión y
          desmitificación de las creencias erradas sobre las
          ITS. La campaña consta de un{' '}
              {/* <span className="tooltip" data-tooltip-content="#videoPLE"> video</span>
                    promocional que incentiva al uso de protección, <span className="tooltip" id="audioPLE">una cuña
                        radial</span> */}{' '}
          y una galería fotográfica que desmitifica tabús
          sexuales.
            </p>
            {/*  <div className="tooltip_templates"><span id="videoPLE"><iframe width=" 560" height="315"
                            src="https://www.youtube.com/embed/GoeZ0N9Z8f8" title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe></span></div>
                <div className="tooltip_templates"><span id="audioPLE"> <audio id="beep-one" preload="auto">
                            <source src="audio/pienso_luego_excito.mp3" controls>
                            <source src="audio/pienso_luego_excito.mp3" controls> Tu navegador no
                            soporta los
                            audios.
                        </audio></span></div> */}

            <h1 id='covid'>Covid-19</h1>
            <p>
          La pandemia mundial del COVID-19 nos ha afectado a
          todos en niveles distintos. Esta ha supeditado que
          todas las prácticas sociales que estábamos
          acostumbrados a tener se rompieran de manera
          drástica. El distanciamiento social no solo nos ha
          limitado a estar a merced de los medios
          informativos tradicionales, sino que, el miedo que
          toda la situación ha impuesto en todos nosotros
          trae recuerdos de una epidemia por virus que
          también azotó el planeta hace unos años. La
          discriminación hacia los portadores e infectados
          es cada vez mayor y los estigmas sociales
          alrededor de las poblaciones vulnerables se hace
          cada vez más y más evidente.
            </p>
            <p>
          La organización mundial de la salud advirtió que
          las metas pactadas para mitigar el VIH en 2020 no
          se podrán alcanzar por la pandemia del Covid-19
          (Organización Mundial de la Salud, 2020). Para
          julio del 2020 se estimaba que 73 naciones corren
          peligro de agotar la existencia de ciertos
          medicamentos para el VIH en su territorio. 24 ya
          han notificado a la organización mundial de la
          salud que se encuentran en niveles críticos de
          abastecimiento de los antirretrovirales
          (Organización Mundial de la Salud, 2020). Según la
          OMS esto significa que alrededor del 33% de las
          personas seropositivas alrededor del mundo
          estarían en riesgo.{' '}
            </p>

            <CardMenu />
          </div>
        </div>
      );
}
