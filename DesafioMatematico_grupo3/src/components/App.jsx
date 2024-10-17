import React,{useState} from 'react'

function App(){
    const[juegoIniciado,setJuegoIniciado] = useState(false);

    const inciarJuego = () => {
        setJuegoIniciado(true);
    };

    return(
        <div className="App">
            {!juegoIniciado ? <Inicio onStart={iniciarJuego}/>:<Juego/>}
        </div>
    );
}