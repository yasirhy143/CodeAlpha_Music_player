🎵 Modern Music Player

A modern, responsive music player built with HTML, CSS, and JavaScript. Features include play/pause, next/previous, playlist, autoplay, volume control, progress bar, and album art — all styled like a Spotify-style player.

Features
Play, pause, next, and previous controls
Display song title, artist, and album art
Progress bar with current time and duration
Volume control slider
Clickable playlist
Autoplay option
Smooth animations and hover effects
Responsive design for desktop and mobile
Installation
Clone or download the repository.
Place your audio files in a folder called songs/.
Place your album images in a folder called images/.
Update the songs array in script.js with your song details:
const songs = [
  {title: "Song One", artist: "Artist A", src: "songs/song1.mp3", img: "images/album1.jpg"},
  {title: "Song Two", artist: "Artist B", src: "songs/song2.mp3", img: "images/album2.jpg"},
];
Open index.html in your browser.
Usage
Click ▶️ to play, ⏸️ to pause
Use ⏮️ / ⏭️ for previous/next song
Click on songs in the playlist to play them
Drag the progress bar to seek
Adjust volume with the slider
Enable Autoplay to automatically play the next song
Folder Structure
music-player/
│
├── index.html
├── style.css
├── script.js
├── songs/
│   ├── song1.mp3
│   └── song2.mp3
└── images/
    ├── album1.jpg
    └── album2.jpg
Technologies Used
HTML5
CSS3 (Flexbox, animations, hover effects)
JavaScript (DOM manipulation, audio API)
Author

Yasir Hussain
