import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayerRef = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayerRef);

player.on(
  'timeupdate',
  throttle(value => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(value));
  }, 1000)
);

const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
if (currentTime !== null) player.setCurrentTime(currentTime.seconds);
