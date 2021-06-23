import React from 'react';
import './App.css';
import { DraggableContainer } from './components/DraggableContainer';
import { Output } from './components/Output';
import { ContextWrapper } from './core/AppContext';


function App() {
  return (
    <ContextWrapper>

      {/* <div className="flex flex-row item-center justify-center mx-auto">
        
      </div> */}
      <div className="flex flex-row items-center justify-center h-screen mx-auto">

        {/* <div className=" w-full"> */}
        <DraggableContainer></DraggableContainer>
        <Output></Output>
        {/* </div> */}
      </div>
    </ContextWrapper>
    // <Draggable></DraggableContainer>
  );
}

export default App;
