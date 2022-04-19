import './App.css';
import './comp/Button.jsx'
import Button from './comp/Button.jsx';
import ImageList from './comp/ImageList.jsx';
import Header from './comp/Header.jsx';
import { useState } from 'react';

function App() {
  const [numClicks, setNumCLicks] = useState(0);
  const avanzarCLicks = () => {
    setNumCLicks(numClicks + 1);
  };
  const retrocederCLicks = () => {
    setNumCLicks(numClicks - 1);
  };
  return (
    <div className='App'>
      <div>
        <div className='rena-contenedor'>
          <Header
            text={'Gallery'}/>
          <ImageList
            i={numClicks} />
        </div>
        <div className='contenedor-principal'>
          <div className='contenedor-desplazamiento'>
          <Button
            text='<--'
            esBotonDeClick={true}
            //funcion previamente declarada
            manejarClick={avanzarCLicks} />
          <Button
            text='-->'
            esBotonDeClick={true}
            //funcion previamente declarada
            manejarClick={retrocederCLicks} />
          </div>
          <Button
            text='Inicio'
            esBotonDeClick={false}
            //funcion creada
            manejarClick={() => { setNumCLicks(0) }} />
        </div>
      </div>
    </div>
  );
}

export default App;
