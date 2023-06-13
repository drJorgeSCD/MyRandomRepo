// JavaScript Document



// DOM elements

const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const progress = document.getElementById("progress");
const volumeSlider = document.getElementById("volume-slider");
const songTitle = document.querySelector(".song-title");
const songArtist = document.querySelector(".song-artist");



// Here are the event listeners

playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', pause);
previousBtn.addEventListener('click', playPrevious);
nextBtn.addEventListener('click', playNext);
audioPlayer.addEventListener('timeupdate', updateProgress);
volumeSlider.addEventListener('input', adjustVolume);
document.addEventListener('keypress', handleKeyPress);



// Handle Keypress events

function handleKeyPress(event)
{
	switch (event.code)
		{
			case 'Space':
				togglePlayPause();
				break;
			
			case 'KeyJ':
				playPrevious();
				break;
			
			case 'KeyL':
				playNext();
				break;
			
			default:
				break;
		}
}

function togglePlayPause()
{
	if(audioPlayer.paused)
		{
			play();
		}else
			{
				pause();
			}
}




// Song list array

const musicFiles = [
  	{
	  	title: "Self Love",
	  	artist: "Gavlyn (feat Beanz)",
	  	file: "music-list/Gavlyn_Self-Love-(feat-Beanz).wav",
	  	coverImage:"music-covers/gavlyn-selflove.jpeg"
  	},
  	{
		title: "Her Grace",
	  	artist: "Maverick Sabre & Chronixx",
	  	file: "music-list/Maverick-Sabre-&-Chronixx_Her-Grace.wav",
	  	coverImage:"music-covers/mavericksabre-hergrace.jpeg"
  	},
  {
	  	title: "Shape of My Heart",
	  	artist: "Sting",
	  	file: "music-list/Sting_Shape-of-My-Heart.wav",
	  	coverImage:"music-covers/sting-shapeofmyheart.jpeg"
  	},
  	{
	  	title: "Addicted",
	  	artist: "Ben L'Oncle Soul",
	  	file: "music-list/Ben-L'Oncle-Soul_Addicted.wav",
	  	coverImage:"music-covers/benlonclesoul-addicted.jpeg"
  	},
  	{
	  	title: "Ain't No Sunshine",
	  	artist: "Bill Withers",
	  	file: "music-list/Bill-Withers_Ain't-No-Sunshine.wav",
	  	coverImage:"music-covers/billwithers-aintnosunshine.jpg"
  	},
  	{
	  	title: "Navajo (COLORS)",
	  	artist: "Masego",
	  	file: "music-list/Masego_Navajo-(COLORS).wav",
	  	coverImage:"music-covers/masego-navajo.jpeg"
  	},
  	{
	  	title: "Teenage Fantasy",
	  	artist: "Jorja Smith",
	  	file: "music-list/Jorja-Smith_Teenage-Fantasy.wav",
	  	coverImage:"music-covers/jorjasmith-teenagefantasy.jpg"
  	},
  	{
	  	title: "What You Won't Do for Love",
	  	artist: "Bobby Caldwell",
	  	file: "music-list/Bobby-Caldwell_What-You-Won't-Do-for-Love.wav",
	  	coverImage:"music-covers/bobbycaldwell-whatyouwontdoforlove.jpg"
  	},
  	{
	  	title: "Boom",
	  	artist: "Beanz (Feat Justin Credible)",
	  	file: "music-list/Beanz_Boom-(Feat-Justin-Credible).wav",
	  	coverImage:"music-covers/beanz-boom.jpeg"
  	},
  	{
	  	title: "Stuffin",
	  	artist: "V1V1D",
	  	file: "music-list/V1V1D_Stuffin.wav",
	  	coverImage:"music-covers/v1v1d-stuffin.jpg"
  	},
	{
	  	title: "Wait a Minute!",
	  	artist: "Willow Smith",
	  	file: "music-list/Willow-Smith_Wait-a-Minute!.mp3",
	  	coverImage:"music-covers/willowsmith-waitaminute.jpeg"
  	},
	{
	  	title: "Paper Trail$",
	  	artist: "Joey Bada$$",
	  	file: "music-list/Joey-Bada$$_Paper-Trail$.mp3",
	  	coverImage:"music-covers/joeybadass-papertrail.jpg"
  	},
	{
	  	title: "Yonkers",
	  	artist: "Tyler The Creator",
	  	file: "music-list/Tyler-The-Creator_Yonkers.mp3",
	  	coverImage:"music-covers/tylerthecreator-yonkers.jpeg"
  	},
	{
	  	title: "Speechless Freestyle",
	  	artist: "Coast Contra",
	  	file: "music-list/Coast-Contra_Speechless-Freestyle.mp3",
	  	coverImage:"music-covers/coastcontra-speechless.png"
  	},
	{
	  	title: "Purple",
	  	artist: "Nas",
	  	file: "music-list/Nas_Purple.mp3",
	  	coverImage:"music-covers/nas-purple.jpg"
  	},
	{
	  	title: "Never Freestyle",
	  	artist: "Coast Contra",
	  	file: "music-list/Coast-Contra_Never-Freestyle.mp3",
	  	coverImage:"music-covers/coast-contra-neverfreestyle.jpeg"
  	},
	{
	  	title: "Nutshell PT2",
	  	artist: "Phife Dawg (ft Busta Rhymes & Redman)",
	  	file: "music-list/Phife-Dawg_Nutshell-PT2-(ft-Busta-Rhymes-&-Redman).mp3",
	  	coverImage:"music-covers/phife-nutshell.jpg"
  	},
	{
	  	title: "505",
	  	artist: "Coast Contra",
	  	file: "music-list/Coast-Contra_505.mp3",
	  	coverImage:"music-covers/coastcontra-505.jpeg"
  	},
	{
	  	title: "Be Easy",
	  	artist: "Ghostface Killah",
	  	file: "music-list/Ghostface-Killah_Be-Easy.mp3",
	  	coverImage:"music-covers/ghostfacekillah-beeasy.jpeg"
  	},
	
];
let currentSongIndex = 0;



// Loading the song

loadSong();

// loading one song

function loadSong() {
  	const currentSong = musicFiles[currentSongIndex];
  	audioPlayer.src = currentSong.file;
  	audioPlayer.load();
  	songTitle.textContent = currentSong.title;
  	songArtist.textContent = currentSong.artist;
	document.getElementById("cover-image").src = currentSong.coverImage;
}



// Playing the loaded song

function play() {
  	audioPlayer.play();
  	playBtn.style.display = "none";
  	pauseBtn.style.display = "inline-block";

  	// Add the active class to the currently playing song box
  	const songBoxes = document.querySelectorAll('.song-box');
  	songBoxes.forEach((songBox, index) => {
		if (index === currentSongIndex) {
			songBox.classList.add('active');
		} else {
			songBox.classList.remove('active');
		}
  	});
	
	
  	document.getElementById("music-player").style.transform = "translateY(0)";

}




// Pausing the current song

function pause() {
  audioPlayer.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";

}




// Playing the previous song 

function playPrevious()
{
	currentSongIndex = (currentSongIndex - 1 + musicFiles.length) % musicFiles.length;
	loadSong();
	play();
}



// Playing the next song

function playNext() {
  currentSongIndex = (currentSongIndex + 1) % musicFiles.length;
  loadSong();
  play();

  // Remove the active class from all song boxes
  const songBoxes = document.querySelectorAll('.song-box');
  songBoxes.forEach(songBox => {
    songBox.classList.remove('active');
  });

  // Add the active class to the next song box
  const nextSongBox = songBoxes[currentSongIndex];
  nextSongBox.classList.add('active');
}


audioPlayer.addEventListener('ended', playNext);


// This will update the progress bar

function updateProgress() 
{
	const { currentTime, duration } = audioPlayer;
  	const progressPercentage = (currentTime / duration) * 100;
  
	progressBarInner.style.width = `${progressPercentage}%`;
}


// Skipping the song to an specific point

const progressBar = document.querySelector(".progress-bar");
const progressBarInner = document.getElementById("progress-bar-inner");

progressBar.addEventListener('click', skipTo);

function skipTo(event) 
{
  const progressWidth = progressBar.clientWidth;
  const clickPosition = event.clientX - progressBar.getBoundingClientRect().left;
  const duration = audioPlayer.duration;

  const skipTime = (clickPosition / progressWidth) * duration;
  audioPlayer.currentTime = skipTime;
}



// This will control the volume slider

function adjustVolume()
{
	audioPlayer.volume = volumeSlider.value;
}


//Side panel trigger

const hamburger = document.querySelector('.hamburger');
const sidePanel = document.getElementById('sidePanel');

hamburger.addEventListener('click', () => {
    sidePanel.classList.toggle('active');
});

const closeIcon = document.querySelector('.close-icon');

closeIcon.addEventListener('click', () => {
    sidePanel.classList.remove('active');
});


const songList = document.querySelector('.song-list');

    // Function to generate song boxes
    function generateSongBoxes() {
      musicFiles.forEach((song, index) => {
        const songBox = document.createElement('div');
        songBox.classList.add('song-box');

        const coverImage = document.createElement('img');
        coverImage.src = song.coverImage;

        const songInfo = document.createElement('div');
        songInfo.classList.add('song-box-info');

        const songTitle = document.createElement('div');
        songTitle.classList.add('song-box-title');
        songTitle.textContent = song.title;

        const songArtist = document.createElement('div');
        songArtist.classList.add('song-box-artist');
        songArtist.textContent = song.artist;

        const playButton = document.createElement('i');
        playButton.classList.add('song-box-play', 'far', 'fa-play-circle');

        songInfo.appendChild(songTitle);
        songInfo.appendChild(songArtist);
        songBox.appendChild(coverImage);
        songBox.appendChild(songInfo);
        songBox.appendChild(playButton);

        // Add event listener to play the song when the play button is clicked
        playButton.addEventListener('click', () => {
          currentSongIndex = index;
          loadSong();
          play();
        });

        songList.appendChild(songBox);
      });
    }

    // Call the function to generate the song boxes
    generateSongBoxes();









