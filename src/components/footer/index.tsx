export function Footer() {
      return (
        <footer>
          <div>
            <span className="logo">VIHdas Conectadas</span>
          </div>

          <div className="row">
            <div className="col-3">
              <div className="link-cat" onClick="footerToggle(this)">
                <span className="footer-toggle"></span>
                <span className="footer-cat">Home</span>
              </div>
              <ul className="footer-cat-links">
                <li><a href="index.html"><span>VIHdas Conectadas</span></a></li>
                <li><a href="index3.html"><span>Hazte la prueba</span></a></li>
                <li><a href="index4.html"><span>Estigma</span></a></li>
              </ul>
            </div>
            <div className="col-3">
              <div className="link-cat" onclick="footerToggle(this)">
                <span className="footer-toggle"></span>
                <span className="footer-cat">Panorama Bogotá</span>
              </div>
              <ul className="footer-cat-links">
                <li><a href="index2.html"><span>General</span></a></li>
                <li><a href="index2.html#covid"><span>Covid-19</span></a></li>
              </ul>
            </div>
            <div className="col-3">
              <div className="link-cat" onclick="footerToggle(this)">
                <span className="footer-toggle"></span>
                <span className="footer-cat">Hombres que tienen sexo con hombres</span>
              </div>
              <ul className="footer-cat-links">
                <li><a href="index5.html"><span>HSH</span></a></li>
                <li><a href="index5.html#practicas"><span>Prácticas de riesgo</span></a>
                </li>
                <li><a href="index5.html#apelo"><span>Barebacking</span></a></li>
                <li><a href="index5.html#drogas"><span>Rota el popper</span></a></li>
                <li><a href="index5.html#parejas"><span>Múltiples parejas
                                        sexuales</span></a></li>
                <li><a href="index5.html#grindr"><span>Grinde y machoBB</span></a></li>
                <li><a href="index5.html#twitter"><span>Twitter</span></a></li>
                <li><a href="index5.html#sitios"><span>Sitios de sexo en
                                        público</span></a></li>
              </ul>
            </div>
            <div className="col-3">
              <div className="link-cat" onclick="footerToggle(this)">
                <span className="footer-toggle"></span>
                <span className="footer-cat">La respuesta</span>
              </div>
              <ul className="footer-cat-links">
                <li><a href="index6.html"><span>La respuesta</span></a></li>
                <li><a href="index6.html#pep"><span>Post day del VIH</span></a></li>
                <li><a href="index6.html#prep"><span>PrEP</span></a></li>
                <li><a href="index6.html#indetec"><span>Indetectable</span></a></li>
                <li><a href="index6.html#otros"><span>Otros métodos de
                                        barrera</span></a></li>
              </ul>
            </div>
            <div className="col-3" id="newsletter">
              <span>Suscríbete para estar al día</span>
              <form id="subscribe">
                <input type="email" id="subscriber-email" placeholder="Ingresa tu correo electrónico" />
                <input type="submit" value="Enviar" id="btn-scribe" />
              </form>

              <div className="social-links social-2">
                <a href="https://goo.gl/maps/DYwnzBxks8iF2DWB6" target="_blank"><i
                  className="fas fa-map-pin"></i></a>
                <a href="mailto:juancam.suarez@urosario.edu.co" target="_blank"><i
                  className="far fa-envelope"></i></a>
                <a href="https://api.whatsapp.com/send?phone=573506144932&text=VIHdas%20Conectadas%20es%20un%20producto%20multimedia%20realizado%20por%20Juan%20Camilo%20Su%C3%A1rez%20Ramirez%2C%20para%20optar%20por%20el%20t%C3%ADtulo%20de%20Periodismo%20y%20Opini%C3%B3n%20P%C3%BAblica%20en%20la%20Universidad%20del%20Rosario.%20Por%20favor%20ind%C3%ADcanos%20tu%20nombre%20y%20en%20c%C3%B3mo%20te%20podemos%20colaborar.%20"
                  target="_blank"><i className="fab fa-whatsapp"></i></a>
                <a href="https://www.urosario.edu.co" target="_blank"><i className="fas fa-book-reader"></i></a>
                <a href="" target="_blank"><i className="fab fa-tumblr"></i></a>
                <a href="" target="_blank"><i className="fab fa-reddit-alien"></i></a>
              </div>

              <div id="address">
                <span>Nuestra UR</span>
                <ul>
                  <li>
                    <i className="far fa-building"></i>
                    <div>La candelaria<br /> Calle 12C N° 6 - 25 Bogotá, Colombia
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-gopuram"></i>
                    <div><a href="https://repository.urosario.edu.co/bitstream/handle/10336/4503/PoliticaTratamientoProteccionDatosPersonales.pdf?sequence=12&_ga=2.12101812.148175864.1620502829-1356835172.1620502829"
                      target="_blank">Politica de Tratamiento y Proteccion de
                                            Datos Personales</a>
                    </div>
                  </li>

                </ul>
              </div>

            </div>
            <div className="social-links social-1 col-6">
              <a href="https://goo.gl/maps/DYwnzBxks8iF2DWB6" target="_blank"><i
                className="fas fa-map-pin"></i></a>
              <a href="mailto:juancam.suarez@urosario.edu.co" target="_blank"><i
                className="far fa-envelope"></i></a>
              <a href="https://api.whatsapp.com/send?phone=573506144932&text=VIHdas%20Conectadas%20es%20un%20producto%20multimedia%20realizado%20por%20Juan%20Camilo%20Su%C3%A1rez%20Ramirez%2C%20para%20optar%20por%20el%20t%C3%ADtulo%20de%20Periodismo%20y%20Opini%C3%B3n%20P%C3%BAblica%20en%20la%20Universidad%20del%20Rosario.%20Por%20favor%20ind%C3%ADcanos%20tu%20nombre%20y%20en%20c%C3%B3mo%20te%20podemos%20colaborar.%20"
                target="_blank"><i className="fab fa-whatsapp"></i></a>
              <a href="https://www.urosario.edu.co" target="_blank"><i className="fas fa-book-reader"></i></a>
              <a href="" target="_blank"><i className="fab fa-tumblr"></i></a>
              <a href="" target="_blank"><i className="fab fa-reddit-alien"></i></a>
            </div>
          </div>
          <div id="copyright">
                    &copy; Universidad del Rosario 2021
          </div>
          <div id="owner">
            <span>
                        Este es un producto multimedia diseñado por <a href="https://www.codingtuting.com">Juan
                            Camilo Suárez Ramirez</a>
            </span>
          </div>
        </footer> );
}