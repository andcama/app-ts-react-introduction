import { TiposBasicos } from './typescript/TiposBasicos';
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { Funciones } from './typescript/Funciones';
import { Contador } from './components/Contador';
import { ContadorConHook } from './components/ContadorconHook';
import { Login } from './components/Login';
import { Usuarios } from './components/Usuarios';
import { Formularios } from './components/Formularios';



const App = () => {
  return (
    <div className="mt-2">
      <h1> TS -React Introduction </h1>
      <hr />
      <TiposBasicos />
      <ObjetosLiterales />
      <Funciones />
      <Contador />
      <ContadorConHook />
      <Login />
      <Usuarios />
      <Formularios />
    </div>
  )
}

export default App;