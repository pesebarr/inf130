import React from 'react';
import '../../units.css';
import Content from '../../../../ContentJSON/U1/8FormatoTabla.json';
import YoutubeLink from "../../../YouTubeLink";
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

const FormatoTabla = () => {
    return (
        <div id='u1-formatotabla'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U1-FormatoTabla.xlsx' className="download-file" download>
                    
                    <IconContext.Provider value={{ className: 'excel-icon' }}>
                        <RiFileExcel2Fill/>
                    </IconContext.Provider> 
                    &nbsp;Descargar archivo
                </a>
            </div>
            <div className='unit-content'>
                <p>
                    {Content["p1"]}
                </p>
                <p>
                    {Content["p2.1"]}
                    <i>{Content["p2.2"]}</i>
                    {Content["p2.3"]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T8F1.gif"} className='unit-image' alt="Formato Tabla"/>
                </div>
                <p>
                    {Content["p3"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T8F2.gif"} className='unit-image' alt="Rango Tabla"/>
                </div>
                <p>
                    {Content["p4"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T8F3.gif"} className='unit-image' alt="Columna Calculada"/>
                </div>
                <p>
                    {Content["p5.1"]}
                    <i>{Content["p5.2"]}</i>
                    {Content["p5.3"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T8F4.gif"} className='unit-image' alt="Fila Total"/>
                </div>
                <p>
                    {Content["p6"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T8F5.gif"} className='unit-image' alt="Nuevas Filas"/>
                </div>
                <p>
                    {Content["p7"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T8F6.gif"} className='unit-image' alt="Filtro Tabla"/>
                </div>
                <p>
                    {Content["p8"]}
                </p>
                <p>
                    {Content["p9"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T8F7.gif"} className='unit-image' alt="Nombre Rango"/>
                </div>
                <YoutubeLink embedId="C1h8KTqZV9k"/>
            </div>
        </div>
    );
}

export default FormatoTabla;