import React, { useState } from "react";
import Fotocheck from "./Fotocheck";
import "./App.css";
import * as XLSX from "xlsx";

interface Trabajador {
  CODIGO: string;
  DNI: string;
  NOMBRES: string;
  AREA: string;
}

function App() {
  const [trabajadores, setTrabajadores] = useState<Trabajador[]>([]);
  const [verInput, setverInput] = useState(true);

  const leerExcel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivo = e.target.files?.[0]; // Verificamos si el archivo existe
    if (!archivo) return; // Si no hay archivo, salimos de la función
    setverInput(false);
    const reader = new FileReader();
    reader.onload = (e) => {
      const datos = new Uint8Array(e.target?.result as ArrayBuffer); // Manejar posibles nulos
      const workbook = XLSX.read(datos, { type: "array" });
      const hoja = workbook.Sheets[workbook.SheetNames[0]];
      const jsonDatos = XLSX.utils.sheet_to_json<Trabajador>(hoja); // Especificamos el tipo de los datos
      setTrabajadores(jsonDatos); // Actualizamos el estado con los datos
    };
    reader.readAsArrayBuffer(archivo);
  };

  // const trabajador = [
  //   {
  //     CODIGO: "349086",
  //     DNI: "46746439",
  //     NOMBRES: "JUAN BARTOLOME",
  //     AREA: "SANIDAD",
  //   },
  //   {
  //     CODIGO: "503237",
  //     DNI: "76441811",
  //     NOMBRES: "OSMAR ALDEMAR",
  //     AREA: "SANIDAD",
  //   },
  //   {
  //     CODIGO: "503236",
  //     DNI: "75867561",
  //     NOMBRES: "CARITO MEDALID",
  //     AREA: "SANIDAD",
  //   },
  //   {
  //     CODIGO: "503235",
  //     DNI: "75859786",
  //     NOMBRES: "JHAIR LEVI",
  //     AREA: "SANIDAD",
  //   },
  //   {
  //     CODIGO: "503234",
  //     DNI: "75718430",
  //     NOMBRES: "JEFFERSON ALBERTO",
  //     AREA: "SANIDAD",
  //   },
  //   {
  //     CODIGO: "503233",
  //     DNI: "73377877",
  //     NOMBRES: "NAYLA JUDITH",
  //     AREA: "SANIDAD",
  //   },
  //   {
  //     CODIGO: "503232",
  //     DNI: "71862490",
  //     NOMBRES: "HELEN JHOANY",
  //     AREA: "SANIDAD",
  //   },
  //   {
  //     CODIGO: "503231",
  //     DNI: "70885535",
  //     NOMBRES: "KARIN LISETH",
  //     AREA: "SANIDAD",
  //   },
  //   {
  //     CODIGO: "387435",
  //     DNI: "70865627",
  //     NOMBRES: "RONAL MIGUEL",
  //     AREA: "RIEGO",
  //   },
  //   {
  //     CODIGO: "503230",
  //     DNI: "47526094",
  //     NOMBRES: "CAROLINA NOEMI",
  //     AREA: "RIEGO",
  //   },
  //   {
  //     CODIGO: "503229",
  //     DNI: "46571093",
  //     NOMBRES: "LUIS ANGEL",
  //     AREA: "RIEGO",
  //   },
  //   {
  //     CODIGO: "098561",
  //     DNI: "44153201",
  //     NOMBRES: "SHEYLA JACORI",
  //     AREA: "RIEGO",
  //   },
  //   {
  //     CODIGO: "408263",
  //     DNI: "47010867",
  //     NOMBRES: "MARIA ESTHER",
  //     AREA: "RIEGO",
  //   },
  //   {
  //     CODIGO: "481665",
  //     DNI: "44980486",
  //     NOMBRES: "MARIA JANETH",
  //     AREA: "ARANDANO",
  //   },
  //   {
  //     CODIGO: "502260",
  //     DNI: "33573666",
  //     NOMBRES: "JOSE HERMES",
  //     AREA: "ARANDANO",
  //   },
  //   {
  //     CODIGO: "502223",
  //     DNI: "81245931",
  //     NOMBRES: "DIANA OVALINDA",
  //     AREA: "ARANDANO",
  //   },
  //   {
  //     CODIGO: "374395",
  //     DNI: "80362105",
  //     NOMBRES: "SANTOS FERMINA",
  //     AREA: "ARANDANO",
  //   },
  //   {
  //     CODIGO: "502222",
  //     DNI: "76845498",
  //     NOMBRES: "VILMA",
  //     AREA: "ARANDANO",
  //   },
  //   {
  //     CODIGO: "502221",
  //     DNI: "76782498",
  //     NOMBRES: "YAHIR ALEXANDER",
  //     AREA: "ARANDANO",
  //   },
  //   {
  //     CODIGO: "502220",
  //     DNI: "75702135",
  //     NOMBRES: "FLOR MEDALI",
  //     AREA: "ARANDANO",
  //   },
  //   {
  //     CODIGO: "502219",
  //     DNI: "75400921",
  //     NOMBRES: "SEGUNDO GUILLE",
  //     AREA: "ARANDANO",
  //   },
  //   {
  //     CODIGO: "502218",
  //     DNI: "74498281",
  //     NOMBRES: "SOFIA KATHERINE",
  //     AREA: "ARANDANO",
  //   },
  //   {
  //     CODIGO: "398503",
  //     DNI: "73520000",
  //     NOMBRES: "FANY YUDIT",
  //     AREA: "ARANDANO",
  //   },
  //   {
  //     CODIGO: "454725",
  //     DNI: "73022307",
  //     NOMBRES: "MARICIELO",
  //     AREA: "ESPARRAGO",
  //   },
  //   {
  //     CODIGO: "389665",
  //     DNI: "71564853",
  //     NOMBRES: "ERICA YOVANY",
  //     AREA: "ESPARRAGO",
  //   },
  //   {
  //     CODIGO: "502217",
  //     DNI: "63179226",
  //     NOMBRES: "FLOR MEDALI",
  //     AREA: "ESPARRAGO",
  //   },
  //   {
  //     CODIGO: "502216",
  //     DNI: "60455482",
  //     NOMBRES: "DIONEL",
  //     AREA: "ESPARRAGO",
  //   },
  //   {
  //     CODIGO: "502215",
  //     DNI: "60439456",
  //     NOMBRES: "HUMBERTO FRANCISCO",
  //     AREA: "ESPARRAGO",
  //   },
  //   {
  //     CODIGO: "502214",
  //     DNI: "60166862",
  //     NOMBRES: "ANGELA YESENIA",
  //     AREA: "ESPARRAGO",
  //   },
  //   {
  //     CODIGO: "502213",
  //     DNI: "60130858",
  //     NOMBRES: "MARELI RUBI",
  //     AREA: "ESPARRAGO",
  //   },
  // ];

  return (
    <>
      {verInput && <input type="file" onChange={leerExcel} />}
      <div className="contenedor">
        {trabajadores.map((dato: any, index) => (
          <Fotocheck
            key={index}
            codigo={dato.CODIGO}
            dni={dato.DNI}
            nombres={dato.NOMBRES}
            area={dato.AREA}
          />
        ))}
      </div>
    </>
  );
}

export default App;
