import style from './Repolist.module.css';
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';


const RepoList = ({ nomeUsuario }) =>{

    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(()=>{
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(()=>{
                setEstaCarregando(false)
                setRepos(resJson)
            },3000)
        })
    },[nomeUsuario])

    return(
        <div className={style.container}>
            {estaCarregando ? (
                <h1 className={style.loading}>carregando...</h1>
            ) : (
            <ul className={style.card}>
                {repos.map(repositorio =>(
                    <li className={style.list} key={repositorio.id}>
                        <div className={style.name}>
                            <b>Nome: </b>{repositorio.name}
                        </div>
                        <div className={style.language}>
                            <b>Linguagem: </b>{repositorio.language}
                        </div>
                        <a className={style.link} target="_blank" href={repositorio.html_url}>Visitar No GitHub</a>
                    </li>
                
                ))}
            </ul>
            )}
        </div>
    )
}
RepoList.propTypes = {
    nomeUsuario: PropTypes.string.isRequired // nomeUsuario deve ser uma string e é obrigatório
  };
export default RepoList;