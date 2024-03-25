import { useState, useEffect } from 'react';
import './form.css'

const Formulario = () =>{
    const [materiaA, setValorA] = useState(0);
    const [materiaB, setValorB] = useState(0);
    const [materiaC, setValorC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(()=> {
        console.log('o componente inicio')
        return ()=> {
            console.log("o componente finalizou")
        }
    },[])
    useEffect(()=>{
        console.log('o estado nome mudou')
    },[nome])
     useEffect(()=>{
        console.log('MateriaA mudou para ' + materiaA)
    },[materiaA,materiaB,materiaC])
    const alteraNome = (evento) =>{
        setNome(estadoAnterior =>{
            // console.log(estadoAnterior)
            return evento.target.value
        })
    }
    const renderizaResultado = () =>{
        const soma = materiaA + materiaB + materiaC; 
        const media = soma / 3;

        if(media >= 7){
            return(
                <p>olá {nome}, você foi aprovado</p>
            )
        }else{
            return(
                <p>olá {nome}, você está de recuperação</p>
            )
        }
    }

    return(
        <div>

        <ul>
            {[1,2,3,4,5].map(item => 
            <li key={item}>{item}</li> )}
        </ul>

        <form className='container'>
            <input type="text" placeholder="digite seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="nota materia A" onChange={evento => setValorA(parseInt(evento.target.value))} />
            <input type="number" placeholder="nota materia B" onChange={evento => setValorB(parseInt(evento.target.value))} />
            <input type="number" placeholder="nota materia C" onChange={evento => setValorC(parseInt(evento.target.value))} />
            <div className='results'>
                <p>
                {materiaA}
                </p>
                <p>
                {materiaB}
                </p>
                <p>
                {materiaC}
                </p>
            </div>
            <p>{renderizaResultado()}</p>
        </form>
        </div>

    )
}
export default Formulario;