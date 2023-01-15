import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const STORAGE_KEY = 'videoplayer-current-time';

const iframeEl = document.getElementById('vimeo-player');
const player = new Player(iframeEl);



player.on('timeupdate', throttle(updateTime, 1000));

function updateTime ({ seconds }) {
localStorage.setItem(STORAGE_KEY, seconds);
}

const time = +localStorage.getItem(STORAGE_KEY);

player.setCurrentTime(time);