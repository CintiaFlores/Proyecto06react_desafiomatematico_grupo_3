import React,{useState} from 'react';

const Juego = () => {
    const [operacion, setOperacion] = useState(generarOperacion());
    const [respuesta, setRespuesta] = useState('');
    const [resultado, setResultado] = useState(null);
    const [intentos, setIntentos] = useState(0);
    const [puntos, setPuntos] = useState(0);
    
    const manejarVerificacion = () =>{
        verificarRespuesta(respuesta, operacion,setResultado, setPuntos, puntos);
        setIntentos(intentos + 1);
    }
}