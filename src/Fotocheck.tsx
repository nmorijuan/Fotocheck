import "./Fotocheck.css"; // Importamos el archivo de estilos CSS para el componente
import { QRCodeSVG } from "qrcode.react"; // Si prefieres usar SVG

// Definimos las propiedades que acepta el componente Cena
interface FotocheckProps {
  codigo: string;
  dni: string;
  nombres: string;
  area: string;
}

// Componente Cena que recibe las propiedades definidas
function Fotocheck({ codigo, dni, nombres, area }: FotocheckProps) {
  // const sede = "Fundo Jayanca V. Fundo U.C 11420 la Viña";
  // const ubicacion = "Jayanca, Lambayeque, Lambayeque";
  const sede = "FDO. OLMOS I";
  const direccion = "Rios Cascajal y Olmos lt.C7 (Ramal sur PEOT)";
  const region = "Olmos, Lambayeque, Lambayeque";
  return (
    <>
      <div className="fotocheck">
        {/*CABECERA */}
        <div className="cabecera">
          <img className="logo" src="./public/logo-beta.png" />
          <div className="titulo">
            <p className="titulo-empresa">COMPLEJO AGROINDUSTRIAL BETA S.A</p>
            <span className="ruc">RUC: 20297939131</span>
          </div>
        </div>
        {/*FIN CABECERA*/}

        {/*CUERPO*/}
        <p className="nombre">{nombres.toUpperCase()}</p>
        <div className="cuerpo-datos">
          <div className="cuerpo">
            <p>
              <span className="negrita">CODIGO:</span> {codigo}
            </p>
            <p>
              <span className="negrita">DNI:</span> {dni}
            </p>
            <p>
              <span className="negrita">AREA:</span> {area.toUpperCase()}
            </p>
            <p>
              <span className="negrita">SEDE:</span> {sede}
            </p>
          </div>
          <center>
            <div className="qr-container">
              <div>
                <QRCodeSVG value={dni} size={60} />
              </div>
            </div>
          </center>
        </div>
        {/*FOOTER */}
        <div className="footer">
          <p>{direccion}</p>
          <p>{region}</p>
        </div>
      </div>
    </>
  );
}

export default Fotocheck; // Exportamos el componente Cena
