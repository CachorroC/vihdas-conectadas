export function Timeline () {
      return (
        <div className="timeline">
          <div className="container_timeline left">
            <div className="content_timeline">
              <h2>1993</h2>
              <h1>SISTEMA GENERAL DE SEGURIDAD SOCIAL EN SALUD</h1>
              <p>La Ley 100 de 1993, crea el Sistema General de Seguridad Social en Salud –SGSSS- y señala
                                que éste sistema debe ordenar las instituciones y los recursos necesarios para alcanzar
                                los objetivos, unificar la normatividad y la planeación
                                de la seguridad social.</p>
            </div>
          </div>
          <div className="container_timeline right">
            <div className="content_timeline">
              <h2>2009</h2>
              <h5>PORCENTAJE DE AFILIACIÓN AL SGSSS</h5>
              <table>
                <tr>
                  <th>Tipo de régimen</th>
                  <th>Porcentaje</th>
                </tr>
                <tr>
                  <td>Régimen Contributivo</td>
                  <td>33,9%</td>
                </tr>
                <tr>
                  <td>Régimen Subsidiado</td>
                  <td>62,2%</td>
                </tr>
                <tr>
                  <td>No Afiliado</td>
                  <td>3,8%</td>
                </tr>
              </table>
              <p>(Lopera Medina, Martínez Escalante, Y Ray Einarson, 2011, p. 83)</p>
            </div>
          </div>
          <div className="container_timeline left">
            <div className="content_timeline">
              <h2>2019</h2>
              <h1>PORCENTAJE DE AFILIACIÓN AL SGSSS</h1>

              <table>
                <tr>
                  <th>Tipo de régimen</th>
                  <th>Porcentaje</th>
                </tr>
                <tr>
                  <td>Régimen Contributivo</td>
                  <td>68%</td>
                </tr>
                <tr>
                  <td>Régimen Subsidiado</td>
                  <td>15%</td>
                </tr>
                <tr>
                  <td>No Afiliado</td>
                  <td>12%</td>
                </tr>
              </table>

              <p>(Secretaría Distrital de Salud, 2019, p. 6)</p>
            </div>
          </div>
        </div>

      );
}