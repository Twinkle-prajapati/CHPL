let isPlaying = false;
let current_song_index = 0;
const songs = [
    {
        name: "Song1",
        artist: "singer1",
        src: "Assets/Songs/s1.mp3",
        image: "Assets/Images/p1.jpg"
    },
    {
        name: "Song2",
        artist: "singer2",
        src: "Assets/Songs/s2.mp3",
        image: "Assets/Images/p2.jpg"
    },
    {
        name: "Song3",
        artist: "singer3",
        src: "Assets/Songs/s3.mp3",
        image: "Assets/Images/p3.jpg"
    }
];

let playpausebtn = document.getElementById('playpausebutton');
let Music = document.getElementById('audio')
let music_photo = document.getElementById('music_photo');
let music_name = document.getElementById('music_name');
let music_singer = document.getElementById('music_singer');
let prev = document.getElementById('prev');
let next = document.getElementById('next');


// load first song
function load(songs) {
    music_photo.innerHTML = `<img src=${songs.image} height="100px">`
    music_name.innerHTML = `<h3>${songs.name}</h3>`
    music_singer.innerHTML = `<p>${songs.artist}</p>`
    Music.innerHTML = `<source src=${songs.src} type="audio/mpeg">`
    Music.load();
}
load(songs[current_song_index])


// Toggle
function toggle() {
    isPlaying ? pauseMusic() : playMusic()
}
//play
function playMusic() {
    isPlaying = true;
    Music.play()
    playpausebtn.innerHTML = `<i class="fa fa-pause-circle" aria-hidden="true"></i>`;
}

//pause
function pauseMusic() {
    isPlaying = false;
    Music.pause()
    playpausebtn.innerHTML = `<i class="fa fa-play-circle" aria-hidden="true"></i>`;
}

// prev song
function previous_music() {
    current_song_index = current_song_index - 1
    load(songs[current_song_index])
    playMusic()
}

// next song
function next_music() {
    current_song_index = current_song_index + 1
    load(songs[current_song_index])
    playMusic()
}

// click the play button
playpausebtn.addEventListener('click', toggle);

// click the prev button
prev.addEventListener('click', previous_music)

//click the next button
next.addEventListener('click', next_music)
