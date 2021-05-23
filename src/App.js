import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { styleReset, AppBar, Toolbar, Hourglass, Panel } from 'react95';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import darkTeal from 'react95/dist/themes/darkTeal';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import './App.css';

import Store from './store';
import { startupSound } from './utils';

// custom components
import Menu from './components/Menu';
import PortfolioModal from './components/PortfolioModal';
import PortfolioModalButton from './components/PortfolioModalButton';
import ContactModal from './components/ContactModal';
import ContactModalButton from './components/ContactModalButton';
import AboutSiteModal from './components/AboutSiteModal';
import AboutSiteModalButton from './components/AboutSiteModalButton';
import AboutMeModal from './components/AboutMeModal';
import AboutMeModalButton from './components/AboutMeModalButton';
import TaskbarClock from './components/TaskbarClock';

const sound = startupSound();
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

function App() {
  const [loading] = useState(false);

  useEffect(() => {
    const ss = localStorage.getItem('startup_sound');
    if (ss === 'true' || ss === null) {
      sound.play();
    }
  });

  // currently not functional, would like to get this to run on a simple timer that starts on app refresh
  if (loading) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ height: '90vh' }}
      >
        <Hourglass size={40} />
      </div>
    );
  }

  return (
    <Store>
      <GlobalStyles />
      <ThemeProvider theme={darkTeal}>
        <nav>
          <AppBar
            style={{
              position: 'fixed',
              bottom: '0px',
              top: 'auto',
              zIndex: '3',
            }}
          >
            <Toolbar className="taskbar">
              <Menu
                className="taskMenu"
                style={{ position: 'fixed', left: '0px', bottom: '45px' }}
              />
              <PortfolioModalButton />
              <ContactModalButton />
              <AboutMeModalButton />
              <AboutSiteModalButton />
              <Panel
                variant="well"
                style={{ padding: '4px', position: 'absolute', right: '4px' }}
              >
                <TaskbarClock style={{ margin: '2px' }} />
              </Panel>
            </Toolbar>
          </AppBar>
        </nav>
        <main>
          <div className="container pt4">
            <PortfolioModal />
            <ContactModal />
            <AboutMeModal />
            <AboutSiteModal />
            <Draggable>
              {/* aim buddy icon */}
              <img
                style={{
                  width: '30px',
                  height: 'auto',
                  bottom: '8px',
                  right: '90px',
                  position: 'fixed',
                  userDrag: 'none',
                  userSelect: 'none',
                  zIndex: '5',
                }}
                src={require('./assets/aim-buddy.gif')}
                alt="aim buddy dancing gif"
              />
            </Draggable>
            <br />
          </div>
        </main>
      </ThemeProvider>
    </Store>
  );
}

export default App;
