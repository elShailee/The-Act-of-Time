import React from 'react';
import './ActionsTab.css';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';
import FirstFewActions from './FirstFewActions';
import ActionsContextProvider from 'Contexts/ActionsContext';
import {useModal} from 'Utils/GeneralComponents/Modal/useModal'
export default function ActionsTab() {
  const { show, RenderModal } = useModal()
  return (
    <GeneralTab id="actionsTab">
      <ActionsContextProvider>
        <FirstFewActions />
      </ActionsContextProvider>
      <div className="actionsWindowWrap"><button className="actionsWindow" onClick={show}>Actions Window</button></div> 
      <RenderModal >
        <h1>Example Modal</h1>
        <main>
          testing
        </main>
        <footer>this is footer </footer>
      </RenderModal >
    </GeneralTab>
    
  );
}
