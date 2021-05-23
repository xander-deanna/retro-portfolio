import React, { useState, useContext, useEffect } from 'react';
import { Button, List, ListItem, Divider } from 'react95';

import { StoreContext } from '../store';
import ClickAwayListener from 'react-click-away-listener';

const Menu = () => {
  const [state, dispatch] = useContext(StoreContext);
  const [startupSound, setStartupSound] = useState(null);

  useEffect(() => {
    const ss = localStorage.getItem('startup_sound');
    if (ss === null) {
      localStorage.setItem('startup_sound', true);
      setStartupSound(true);
    } else {
      setStartupSound(ss === 'true');
    }
  }, []);

  const _handleClick = () => {
    dispatch({ type: 'SET_MENU', payload: !state.menu });
  };

  const _handleClose = () => {
    dispatch({ type: 'SET_MENU', payload: false });
  };

  const _handleStartupSound = () => {
    const ss = localStorage.getItem('startup_sound');
    if (ss === 'true') {
      localStorage.setItem('startup_sound', false);
      setStartupSound(false);
    } else {
      localStorage.setItem('startup_sound', true);
      setStartupSound(true);
    }
  };

  const _handleListItemClick = name => {
    switch (name) {
      case 'portfolio':
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'portfolio' });
        dispatch({ type: 'SET_PORTFOLIO_MODAL', payload: true });
        dispatch({ type: 'SET_HIDE_PORTFOLIO_MODAL_BUTTON', payload: false });
        break;
      case 'contact':
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'contact' });
        dispatch({ type: 'SET_CONTACT_MODAL', payload: true });
        dispatch({ type: 'SET_HIDE_CONTACT_MODAL_BUTTON', payload: false });
        break;
      case 'about-me':
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'about-me' });
        dispatch({ type: 'SET_ABOUT_ME_MODAL', payload: true });
        dispatch({ type: 'SET_HIDE_ABOUT_ME_MODAL_BUTTON', payload: false });
        break;
      case 'about-site':
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'about-site' });
        dispatch({ type: 'SET_ABOUT_SITE_MODAL', payload: true });
        dispatch({ type: 'SET_HIDE_ABOUT_SITE_MODAL_BUTTON', payload: false });
        break;
      case 'github':
        const win = window.open('https://github.com/xander-deanna', '_blank');
        win.focus();
        break;
      case 'resume':
        const resumeOpen = window.open('resume.pdf', '_blank');
        resumeOpen.focus();
        break;

      default:
        return null;
    }
  };

  const _handleClickAway = () => {
    if (state.menu) {
      dispatch({ type: 'SET_MENU', payload: false });
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <ClickAwayListener onClickAway={_handleClickAway}>
        {state.menu && (
          <List
            style={{ position: 'absolute', left: '0', bottom: '100%' }}
            onClick={_handleClose}
          >
            {/* Portfolio Link Here */}
            <ListItem onClick={() => _handleListItemClick('portfolio')}>
              <img
                style={{ width: 22, marginRight: 8 }}
                src={require('../assets/icons/brush.ico')}
                alt="portfolio"
              />
              <span>Portfolio</span>
            </ListItem>

            {/* Résumé Link Here */}
            <ListItem onClick={() => _handleListItemClick('resume')}>
              <img
                style={{ width: 22, marginRight: 8 }}
                src={require('../assets/icons/resume.png')}
                alt="résumé"
              />
              <span>Résumé</span>
            </ListItem>

            {/* Contact Link Here */}
            <ListItem onClick={() => _handleListItemClick('contact')}>
              <img
                style={{ width: 22, marginRight: 8 }}
                src={require('../assets/icons/mail.ico')}
                alt="conact"
              />
              <span>Contact</span>
            </ListItem>

            {/* About Me Link Here */}
            <ListItem onClick={() => _handleListItemClick('about-me')}>
              <img
                style={{ width: 22, marginRight: 8 }}
                src={require('../assets/icons/about-me.gif')}
                alt="about me"
              />
              <span>About Me</span>
            </ListItem>

            {/* About Site Link Here */}
            <ListItem onClick={() => _handleListItemClick('about-site')}>
              <img
                style={{ width: 22, marginRight: 8 }}
                src={require('../assets/icons/about-site.png')}
                alt="about site"
              />
              <span>About Site</span>
            </ListItem>

            {/* Github Link Here */}
            <ListItem onClick={() => _handleListItemClick('github')}>
              <img
                style={{ width: 22, marginRight: 8 }}
                src={require('../assets/icons/github.png')}
                alt="github"
              />
              <span>GitHub</span>
            </ListItem>

            <Divider />

            <ListItem onClick={_handleStartupSound}>
            <img
                style={{ width: 22, marginRight: 8 }}
                src={require('../assets/icons/sound.png')}
                alt="sound"
              /> 
              <span>Sound: {startupSound ? 'On' : 'Off'}</span>
            </ListItem>
          </List>
        )}
        <Button
          onClick={_handleClick}
          active={state.menu}
          style={{ fontWeight: 'bold', marginRight: 6 }}
        >
          <img
            src={require('../assets/icons/windowslogo.png')}
            alt="winlogo"
            style={{ marginLeft: -2, marginRight: 5, width: 20 }}
          />
          Start
        </Button>
      </ClickAwayListener>
    </div>
  );
};

export default Menu;
