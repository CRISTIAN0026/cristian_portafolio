import React from "react";

// display:'flex', display: 'grid',
// justifyContent: 'center',
// alignItems: 'flex-start',
// gap: '2.6px',
// gridTemplateColumns: 'repeat(7, 1fr)'
export default function Tecnologías({tecnologías}){
    return(
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {tecnologías?.map((tec) => (
                <div className="skills--section--img-tec">
                <img src={tec.img} alt="sa"/>
                <h6 style={{fontWeight:'bold'}}>{tec.name}</h6>
                </div>
               
            ))}
        
        </div>
    )
}