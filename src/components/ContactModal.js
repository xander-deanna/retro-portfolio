import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Fieldset,
} from 'react95';

import { StoreContext } from '../store';

const ContactModal = () => {
  const [state, dispatch] = useContext(StoreContext);

  const _handleClose = () => {
    dispatch({ type: 'SET_CONTACT_MODAL', payload: false });
    dispatch({ type: 'SET_HIDE_CONTACT_MODAL_BUTTON', payload: true });
  };

  const _handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'contact' });
  };

  return (
    <Draggable>
      <Window
        onClick={_handleClick}
        style={{
          width: 290,
          height: 150,
          maxWidth: '90%',
          maxHeight: '90%',
          position: 'fixed',
          bottom: '60px',
          left: '5%',
          zIndex: 2,
          display: state.ContactModal ? 'block' : 'none',
        }}
      >
        <WindowHeader className="flex items-center justify-between">
          <span>Contact</span>
          <Button onClick={_handleClose}>
            <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>
              x
            </span>
          </Button>
        </WindowHeader>
        <WindowContent>
          <Fieldset label="holla at me!">
            <Button href="mailto:xander.deanna@gmail.com">Email</Button>
            <Button href="mailto:xander.deanna@gmail.com">GitHub</Button>
            <Button href="mailto:xander.deanna@gmail.com">Linkedin</Button>
          </Fieldset>
        </WindowContent>
      </Window>
    </Draggable>
  );
};

export default ContactModal;
