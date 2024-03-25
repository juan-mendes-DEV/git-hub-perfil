// import { useState } from "react";
import { useState } from "react";
import Perfil from "./components/Perfil";
import RepoList from "./components/reposList";

// import Formulario from "./components/Formulario";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  // function retornaNome(){
  //   return nome;
  // }

  // const pessoa ={
  //   nome : 'maria'
  // }

  // let estaDeDia = false;
  // const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  return (
    <div>
      <div className="form-search">
        <h1>Digite o nome de usuario para fazer uma pesquisa no github:</h1>
        <input placeholder="juan-mendes-DEV" type="text" onBlur={(e)=>setNomeUsuario(e.target.value)} />
      </div>

      {nomeUsuario.length > 4 && (
        <div>
          
          <Perfil nomeUsuario={nomeUsuario} />
          <RepoList nomeUsuario={nomeUsuario}/>

        </div>
      )}
    </div>
    )
}

export default App
