import React, { useContext } from 'react';
import { Button } from 'react95';

import { StoreContext } from '../store';

const AboutSiteModalButton = () => {
  const [state, dispatch] = useContext(StoreContext);

  const _handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'about-site' });
    dispatch({ type: 'SET_ABOUT_SITE_MODAL', payload: !state.AboutSiteModal });
  };

  return (
    <>
      {!state.hideAboutSiteModalButton && (
        <Button
          onClick={_handleClick}
          active={state.AboutSiteModal}
          className="bold"
          style={{ marginRight: 3 }}
        >
          <img
            src={require('../assets/icons/about-site.png')}
            alt="Logo"
            style={{ marginLeft: -2, marginRight: 5, width: 20 }}
          />
          About Site
        </Button>
      )}
    </>
  );
};

export default AboutSiteModalButton;
