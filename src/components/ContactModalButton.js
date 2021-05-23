import React, { useContext } from 'react';
import { Button } from 'react95';

import { StoreContext } from '../store';

const ContactModalButton = () => {
  const [state, dispatch] = useContext(StoreContext);

  const _handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'contact' });
    dispatch({ type: 'SET_CONTACT_MODAL', payload: !state.ContactModal });
  };

  return (
    <>
      {!state.hideContactModalButton && (
        <Button
          onClick={_handleClick}
          active={state.ContactModal}
          className="bold"
          style={{ marginRight: 3 }}
        >
          <img
            src={require('../assets/icons/mail.ico')}
            alt="Logo"
            style={{ marginLeft: -2, marginRight: 5, width: 20 }}
          />
          Contact
        </Button>
      )}
    </>
  );
};

export default ContactModalButton;
