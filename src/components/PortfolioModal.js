import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import { Window, WindowContent, WindowHeader, Button } from 'react95';

import { StoreContext } from '../store';

const PortfolioModal = () => {
  const [state, dispatch] = useContext(StoreContext);

  const _handleClose = () => {
    dispatch({ type: 'SET_PORTFOLIO_MODAL', payload: false });
    dispatch({ type: 'SET_HIDE_PORTFOLIO_MODAL_BUTTON', payload: true });
  };

  const _handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'portfolio' });
  };

  return (
    <Draggable>
      <Window
        onClick={_handleClick}
        style={{
          width: 600,
          height: 600,
          maxWidth: '80%',
          maxHeight: '80%',
          position: 'fixed',
          bottom: '8%',
          right: '8%',
          zIndex: 1,
          transform: 'translate(-50%, -50%)',
          display: state.PortfolioModal ? 'block' : 'none',
        }}
      >
        <WindowHeader className="flex items-center justify-between">
          <span>Portfolio</span>
          <Button onClick={_handleClose}>
            <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>
              x
            </span>
          </Button>
        </WindowHeader>
        <WindowContent></WindowContent>
      </Window>
    </Draggable>
  );
};

export default PortfolioModal;
