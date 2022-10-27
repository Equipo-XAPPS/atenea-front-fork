import React from "react";
import Arrow from "../../src/assets/images/arrow_right.svg";
import { Link } from "react-router-dom";
const ViewGrados = ({name, lengtAlumnos}) => {
  return (
    <>
      <div className="flex justify-between">
        <p className="font-bold text-[16px]">{name}</p>
        <Link to="/asistencia/tomar-asistencia">
          <img className="mt-3 cursor-pointer" src={Arrow} />
        </Link>
      </div>

      <div className="flex  space-x-2 mt-1 mb-2 ">
        <p className="text-xs text-[12px] text-[#9695A2]">Cantidad de alumnnos: </p>
        <p className="text-[12px] text-[#9695A2] font-bold">{lengtAlumnos} alumnos</p>
      </div>
      <hr className='administracion' />
    </>
  );
};

export default ViewGrados;
