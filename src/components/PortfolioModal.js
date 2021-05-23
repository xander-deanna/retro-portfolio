import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import { Window, WindowContent, WindowHeader, Button, Cutout } from 'react95';

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
          width: 810,
          height: 500,
          minWidth: 430,
          maxWidth: '90%',
          maxHeight: '90%',
          position: 'fixed',
          bottom: '60px',
          right: '10px',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
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
        <WindowContent
          style={{
            width: '85%',
            height: '100%',
          }}
        >
          <Cutout style={{ width: '100%', height: '350px' }}>
            <a href="http://xander-deanna.com/code-quiz/">
              <img
                style={{
                  width: '300px',
                  height: 'auto',
                  border: '2px solid #000000',
                  margin: '0px 5px 0px 5px',
                  display: 'inline-block',
                }}
                src={require('../assets/project-images/code-quiz.gif')}
                alt="code quiz assignment"
              />
            </a>
            <a href="http://xander-deanna.com/password-generator/">
              <img
                style={{
                  width: '300px',
                  height: 'auto',
                  border: '2px solid #000000',
                  margin: '0px 5px 0px 5px',
                  display: 'inline-block',
                }}
                src={require('../assets/project-images/password-generator.gif')}
                alt="password generator assignment"
              />
            </a>
            <a href="http://xander-deanna.com/project-1/">
              <img
                style={{
                  width: '300px',
                  height: 'auto',
                  border: '2px solid #000000',
                  margin: '0px 5px 0px 5px',
                  display: 'inline-block',
                }}
                src={require('../assets/project-images/project-1.gif')}
                alt="project 1"
              />
            </a>
            <a href="https://damp-thicket-88352.herokuapp.com/login">
              <img
                style={{
                  width: '300px',
                  height: 'auto',
                  border: '2px solid #000000',
                  margin: '0px 5px 0px 5px',
                  display: 'inline-block',
                }}
                src={require('../assets/project-images/project-2.gif')}
                alt="project 2"
              />
            </a>
            <a href="http://xander-deanna.com/employee-directory">
              <img
                style={{
                  width: '300px',
                  height: 'auto',
                  border: '2px solid #000000',
                  margin: '0px 5px 0px 5px',
                  display: 'inline-block',
                }}
                src={require('../assets/project-images/employee-directory.gif')}
                alt="employee directory assignment"
              />
            </a>
            <a href="http://xander-deanna.com/weather-dashboard">
              <img
                style={{
                  width: '300px',
                  height: 'auto',
                  border: '2px solid #000000',
                  margin: '0px 5px 0px 5px',
                  display: 'inline-block',
                }}
                src={require('../assets/project-images/weather-dashboard.gif')}
                alt="weather dashboard assignment"
              />
            </a>
          </Cutout>
          <img
            style={{
              width: '300px',
              maxWidth: '90%',
              position: 'absolute',
              bottom: '10px',
              left: '10px',
            }}
            src={require('../assets/portfolio-paints.png')}
            alt="ms paint color swatches icon "
          />
        </WindowContent>
      </Window>
    </Draggable>
  );
};

export default PortfolioModal;
