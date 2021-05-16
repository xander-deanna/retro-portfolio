import React, { useContext } from 'react';
import { Button } from 'react95';

import { StoreContext } from '../store';


const AboutMeModalButton = () => {
  const [state, dispatch] = useContext(StoreContext);

  const _handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'about-me' });
    dispatch({ type: 'SET_ABOUT_ME_MODAL', payload: !state.AboutMeModal });
  };

  return (
    <>
      {!state.hideAboutMeModalButton && (
        <Button
          onClick={_handleClick}
          active={state.AboutMeModal}
          className="bold"
          style={{ marginRight: 3 }}
        >
          <img
            src={require('../assets/icons/about-me.gif')}
            alt="Logo"
            style={{ marginLeft: -2, marginRight: 5, width: 20 }}
          />
          About Me
        </Button>
      )}
    </>
  );
};

export default AboutMeModalButton;
