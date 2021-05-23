import React, { useContext } from 'react';
import { Button } from 'react95';

import { StoreContext } from '../store';

const PortfolioModalButton = () => {
  const [state, dispatch] = useContext(StoreContext);

  const _handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'portfolio' });
    dispatch({ type: 'SET_PORTFOLIO_MODAL', payload: !state.PortfolioModal });
  };

  return (
    <>
      {!state.hidePortfolioModalButton && (
        <Button
          onClick={_handleClick}
          active={state.PortfolioModal}
          className="bold"
          style={{ marginRight: 3 }}
        >
          <img
            src={require('../assets/icons/brush.ico')}
            alt="Logo"
            style={{ marginLeft: -2, marginRight: 5, width: 20 }}
          />
          Portfolio
        </Button>
      )}
    </>
  );
};

export default PortfolioModalButton;
