import React, { useContext } from 'react';
// import { useState } from 'react';
import Draggable from 'react-draggable';
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Anchor,
  Fieldset,
} from 'react95';

import { StoreContext } from '../store';

const AboutSiteModal = () => {
  const [state, dispatch] = useContext(StoreContext);
  // const [zIndexState, zIndexUpdate] = useState(0);
  const _handleClose = () => {
    dispatch({ type: 'SET_ABOUT_SITE_MODAL', payload: false });
    dispatch({ type: 'SET_HIDE_ABOUT_SITE_MODAL_BUTTON', payload: true });
  };

  const _handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'about-site' });

    // attempt at changing z index based on which window is clicked
    // zIndexUpdate(zIndexState + 5);
  };

  return (
    <Draggable>
      <Window
        onClick={_handleClick}
        style={{
          width: 300,
          maxWidth: '90%',
          maxHeight: '90%',
          position: 'fixed',
          top: '10%',
          right: '5%',
          zIndex: '2',
          // {zIndexState},
          transform: 'translate(-50%, -50%)',
          display: state.AboutSiteModal ? 'block' : 'none',
        }}
      >
        <WindowHeader className="flex items-center justify-between">
          <span>About Site</span>
          <Button onClick={_handleClose}>
            <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>
              x
            </span>
          </Button>
        </WindowHeader>
        <WindowContent>
          <p>
            This site is a nostalia fueled, open source, Windows 95 style
            portfolio.
          </p>
          <br />

          {/* React React95 and React-Draggable links */}
          <Fieldset label="built with">
            <Anchor href="https://reactjs.org/" target="_blank">
              React
            </Anchor>
            {', '}
            <Anchor href="https://github.com/arturbien/React95" target="_blank">
              React95
            </Anchor>
            {' and '}
            <br />
            <Anchor href="https://www.npmjs.com/package/react-draggable" target="_blank">
              React-Draggable
            </Anchor>
          </Fieldset>

          {/* Icon link */}
          <br />
          <Fieldset label="icons">
            <Anchor
              href="https://artage.io/en/icon-packs/original-windows-95-icons"
              target="_blank"
            >
              downloaded here
            </Anchor>
          </Fieldset>

          {/* Startup sound link */}
          <br />
          <Fieldset label="startup sound">
            <Anchor
              href="http://soundbible.com/1654-Windows-95-Startup.html"
              target="_blank"
            >
              downloaded here
            </Anchor>
          </Fieldset>
        </WindowContent>
      </Window>
    </Draggable>
  );
};

export default AboutSiteModal;
