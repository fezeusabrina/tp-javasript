 //element de DOM sur lesquels on va interagir
 const player = document.getElementById('player');
 const playBtn = document.getElementById('play');
 const stopBtn = document.getElementById('stop');
 const prevBtn = document.getElementById('prev');
 const nextBtn = document.getElementById('next');
 const volUpBtn = document.getElementById('vol-up');
 const volDownBtn = document.getElementById('vol-down');
 const loopBtn = document.getElementById('loop');
 const audio = document.getElementById('audio');
 const title = document.getElementById('title');
 const cover = document.getElementById('cover');
 const progressContainer = document.getElementById('progress-Container');
 const progress = document.getElementById('progress');
 const volContainer = document.getElementById('vol-Container');
 const volprogress = document.getElementById('vol-progress');

//tous les titres presents dans le dossier a lire
const songs = ['dena mwana', 'devotion', 'indira'];

//variables
let songIndex = 0;
let isStopped = true;
let islooping = true;

const currentSong = songs[songIndex];
 
//chargement des détails du song à jouer
loadSong(currentSong);

//permet de recuperer les détails du song à jour
function loadSong(song){
	title.innerText = song ;
	audio.src = `music/${song}.mp3`;  
	cover.src = `cover/${song}.jpg`;
}

//liste des évenements du DOM 
audio.addEventListener('error', audioError); 
playBtn.addEventListener('click', playPause);
stopBtn.addEventListener('click',stopSong);

function changeclasses(e, c1, c2){
	e.classList.remove(c1);
	e.classList.add(c2);
}

//fonction permettant de jouer un son
function playSong(song){
	if (isStopped) {
		loadSong(song);
		cover.alt = song;
	}
	playBtn.querySelector('i.fas').classList.remove ('fa-play');
	playBtn.querySelector('i.fas').classList.add ('fa-pause');
	playBtn.querySelector('i.fas').style.color = '#00ff00';
	document.getElementById('music-container').classList.remove('disable-animation');
	player.classList.remove('stop');
	player.classList.add('play');


	audio.play();
}

//permet de mettre le son en pause
function pauseSong(){
	player.classList.remove('play');
	playBtn.querySelector('i.fas').classList.remove('fa-pause');
	playBtn.querySelector('i.fas').classList.add('fa-play');
	playBtn.querySelector('i.fas').style.color = '#fff';
	document.getElementById('music-container').classList.add('disable-animation');
	audio.pause();
}

//permet d'arreter un son en cour de lecture
function stopSong(){
	document.getElementById('music-container').classList.add('disable-animation');
	playBtn.querySelector('i.fas').classList.remove('fa-pause');
	playBtn.querySelector('i.fas').classList.add('fa-play');
	playBtn.querySelector('i.fas').style.color = '#fff';
	player.classList.remove('play');
	player.classList.add('stop');
	title.innerText = 'Titre';
	audio.pause();
	audio.currentTime = 0;
	cover.alt = '';
	isStopped = true;
} 




//permet de lancer ou d'arreter le son en fonction de l'etat dans lequel il se trouve
function playPause() {
	const isPlaying = player.classList.contains('play');
	isPlaying ? pauseSong() : playSong(currentSong);
}
//permet de renvoyer une erreur si le son n'a pas été trouvé
function audioError() {
	title.innerText = "Erreur lors du chargement";
}