const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const albumImg = document.getElementById('album-img');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume');
const playlistEl = document.getElementById('playlist');
const autoplayCheckbox = document.getElementById('autoplay');

const songs = [
  {title: "Song One", artist: "Artist A", src: "songs/song1.mp3", img: "images/album1.jpg"},
  {title: "Song Two", artist: "Artist B", src: "songs/song2.mp3", img: "images/album2.jpg"},
  {title: "Song Three", artist: "Artist C", src: "songs/song3.mp3", img: "images/album3.jpg"},
];

let currentSongIndex = 0;
let isPlaying = false;

// Load playlist
songs.forEach((song, index) => {
  const li = document.createElement('li');
  li.textContent = `${song.title} - ${song.artist}`;
  li.addEventListener('click', () => {
    loadSong(index);
    playSong();
  });
  playlistEl.appendChild(li);
});

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  albumImg.src = song.img;

  document.querySelectorAll('#playlist li').forEach((li, i) => {
    li.classList.toggle('active', i === index);
  });
  currentSongIndex = index;
}

// Play / Pause
function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.textContent = '⏸️';
}
function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.textContent = '▶️';
}
playBtn.addEventListener('click', () => isPlaying ? pauseSong() : playSong());

// Next / Previous
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
}
function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
}
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// Progress bar
audio.addEventListener('timeupdate', () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.value = progressPercent || 0;

  let minutes = Math.floor(audio.currentTime / 60);
  let seconds = Math.floor(audio.currentTime % 60);
  if(seconds < 10) seconds = '0' + seconds;
  currentTimeEl.textContent = `${minutes}:${seconds}`;

  if(audio.duration) {
    let dMinutes = Math.floor(audio.duration / 60);
    let dSeconds = Math.floor(audio.duration % 60);
    if(dSeconds < 10) dSeconds = '0' + dSeconds;
    durationEl.textContent = `${dMinutes}:${dSeconds}`;
  }
});

// Seek
progress.addEventListener('input', () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// Volume
volumeSlider.addEventListener('input', () => audio.volume = volumeSlider.value);

// Autoplay
audio.addEventListener('ended', () => {
  if(autoplayCheckbox.checked) nextSong();
});

// Initial load
loadSong(currentSongIndex);