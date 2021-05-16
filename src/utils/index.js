import { Howl } from 'howler';

export const startupSound = () => {
  return new Howl({
    src: [require('../assets/windows95_startup_theme.mp3')],
  });
};
