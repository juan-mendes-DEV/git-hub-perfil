import styles from './Perfil.module.css';

// import './perfil.css'
                //desestruturação dentro dos argumentos arrow functions
const perfil = ({nomeUsuario}) =>{

    //desestruturação de props
    //const {endereco,nome} = props
    return(
        <header className={styles.container}>

            {/* isso converte um obj para uma string ai pode visualizar na tela */}
            {/* {JSON.stringify(props)} */}
            <img className={styles.perfil} src={`https://github.com/${nomeUsuario}.png`} alt="perfil" />
            {/* <h3 className='img-avatar'>{endereco} de avatar</h3> */}
            <p className={styles.neon}> {nomeUsuario} </p>
        </header>
    )
}
export default perfil;
