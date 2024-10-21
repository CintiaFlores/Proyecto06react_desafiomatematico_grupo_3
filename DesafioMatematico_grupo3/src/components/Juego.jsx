import React,{useState} from 'react';
import generarOperacion from './GenerarOperaciones';
import verificarRespuesta from './verificarRespuesta';
import siguienteDesafio from './siguienteDesafio';
import CardDesafio from './TarjetaOperaciones';
import Puntuacion from './Puntuacion';

const Juego = () => {
    const [operacion, setOperacion] = useState(generarOperacion());
    const [respuesta, setRespuesta] = useState('');
    const [resultado, setResultado] = useState(null);
    const [intentos, setIntentos] = useState(0);
    const [puntos, setPuntos] = useState(0);
    
    const manejarVerificacion = () =>{
        verificarRespuesta(respuesta, operacion,setResultado, setPuntos, puntos);
        setIntentos(intentos + 1);
    };
    
    const manejarSiguienteDesafio = () => {
        siguienteDesafio(setOperacion, generarOperacion, setRespuesta, setResultado);
    };
    
    if (intentos === 5){
        return <Puntuacion puntos={puntos}/>
    }
    return (
        <div className="juego">
            <CardDesafio
                operacion={operacion}
                respuesta={respuesta}
                setRespuesta={setRespuesta}
                verificarRespuesta={manejarVerificacion}
                siguienteDesafio={manejarSiguienteDesafio}
                intentos={intentos}
                puntos={puntos}
                resultado={resultado}
            />
        </div>
    );
}

export default Juego;