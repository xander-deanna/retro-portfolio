import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Desktop,
  Cutout,
  Select,
  Tooltip,
} from 'react95';

import { StoreContext } from '../store';


const AboutMeModal = () => {
  const [state, dispatch] = useContext(StoreContext);
  const toolsOptions = [
    { value: 1, label: 'Tools I Use' },
    { value: 2, label: 'HTML5' },
    { value: 3, label: 'CSS3' },
    { value: 4, label: 'JavaScript' },
    { value: 5, label: 'React.js' },
    { value: 6, label: 'GitHub' },
    { value: 7, label: 'Photoshop' },
    { value: 8, label: 'Illustrator' },
  ];

  const _handleClose = () => {
    dispatch({ type: 'SET_ABOUT_ME_MODAL', payload: false });
    dispatch({ type: 'SET_HIDE_ABOUT_ME_MODAL_BUTTON', payload: true });
  };

  const _handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'about-me' });
  };

  return (
    <Draggable>
      <Window
        onClick={_handleClick}
        style={{
          width: 450,
          maxWidth: '90%',
          maxHeight: '90%',
          position: 'fixed',
          top: '10%',
          left: '5%',
          zIndex: 2,
          transform: 'translate(-50%, -50%)',
          display: state.AboutMeModal ? 'block' : 'none',
        }}
      >
        <WindowHeader className="flex items-center justify-between">
          <span>About Me</span>
          <Button onClick={_handleClose}>
            <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>
              x
            </span>
          </Button>
        </WindowHeader>
        <WindowContent>
          <Desktop>
            <Tooltip text="Hey there! :)" enterDelay={100} leaveDelay={500}>
              <img
                src={require('../assets/about-me-photo.gif')}
                alt="animated gif of the profile creator"
                style={{ width: '155px', height: '115px' }}
              />
            </Tooltip>
          </Desktop>
          <br />
          <Select
            className="toolsDropdown"
            defaultValue={0}
            options={toolsOptions}
            menuMaxHeight={160}
            width={'200px'}
          />
          <Cutout style={{ width: '100%', height: '200px' }}>
            <div>
              <p style={{ width: '360px' }}>
                Hi there! My name is Deanna. I'm a student at Univerity of Texas
                - Austin, enrolled in the Full-Stack Development Bootcamp.
                I created this webpage to help showcase the skills I have learned
                learned throughout my Bootcamp journey, but I've always had a
                love for web development. I've been using HTML and CSS since
                Myspace first dominated the internet, and still continued
                Front-End Development as a hobby long after it faded away. I'm
                so excited to finally be able to expand upon my skills and
                pursue what I've always loved as a career. Please feel free to
                contact me if you have any questions, and enjoy the site!
              </p>
            </div>
          </Cutout>
        </WindowContent>
      </Window>
    </Draggable>
  );
};

export default AboutMeModal;
