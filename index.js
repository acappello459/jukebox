var play = document.getElementById('playButt');

var pause = document.getElementById('pauseButt');

var next = document.getElementById('nextButt');

var titleBox = document.getElementById('titleBox')

var artwork = document.getElementById('artwork')

var body = document.getElementsByTagName('body')[0]

//
//
// play.style.height = '100px'
// play.style.width = '100px'
// play.style.backgroundColor = 'blue'
// play.innerHTML = 'PLAY'
// play.style.textAlign = 'center'
// document.body.appendChild(play)
//
// pause.style.height = '100px'
// pause.style.width = '100px'
// pause.style.backgroundColor = 'blue'
// pause.innerHTML = 'PAUSE'
// pause.style.textAlign = 'center'
// document.body.appendChild(pause)
//
// next.style.height = '100px'
// next.style.width = '100px'
// next.style.backgroundColor = 'blue'
// next.innerHTML = 'NEXT'
// next.style.textAlign = 'center'
// document.body.appendChild(next)
//
// titleBox.style.height = '100px'
// titleBox.style.width = '100px'
// titleBox.style.backgroundColor = 'blue'
// // itleBox.innerHTML = 'NEXT'
// titleBox.style.textAlign = 'center'
// document.body.appendChild(titleBox)



play.addEventListener('click', function(){
  a.playAudio()
  titleBox.innerHTML = a.playlist[a.songNum].title + ' - '+a.playlist[a.songNum].artist;
  artwork.style.backgroundImage = 'url('+a.playlist[a.songNum].albumCover;+')';

});
// var currentSong = new Audio('audio_files/The_One.mp3')

pause.addEventListener('click', function(){
  a.pauseAudio()
  titleBox.innerHTML ='SONG PAUSED'
});
next.addEventListener('click', function(){
  a.nextAudio()
  a.playAudio()
titleBox.innerHTML = a.playlist[a.songNum].title + ' - '+a.playlist[a.songNum].artist;
artwork.style.backgroundImage = 'url('+a.playlist[a.songNum].albumCover;+')'

});

titleBox.style.textAlign = 'center'

class Song{
  constructor(title, url, artist, albumCover){
  this.title = title;
  this.url = url;
  this.artist = artist;
  this.albumCover = albumCover;
  this.myAudio = new Audio(this.url)
  }
}

var trackNum=0;
class Playlist{
  constructor(){
    this.playlist = [];
    // this.myAudio = new Audio()
    this.songNum = 0
      }
    addSongs(song){
      this.playlist.push(song);
    }
    playAudio(){
      this.playlist[this.songNum].url;
      this.playlist[this.songNum].myAudio.play();
    }
    pauseAudio(){
      // this.myAudio.pause()
      this.playlist[this.songNum].myAudio.pause();
    }
    nextAudio(){
      this.playlist[this.songNum].myAudio.pause();
      this.songNum++;
      if(this.songNum > this.playlist.length-1){
        this.songNum = 0;
        this.playlist[this.songNum].url;
        this.playlist[this.songNum].myAudio.currentTime = 0;
        this.playlist[this.songNum].myAudio.play();


      }else {
        this.playlist[this.songNum].myAudio.currentTime = 0;
        this.playlist[this.songNum].myAudio.play();


      }
    }

    }

var song1 = new Song('Home','audio_files/Home.mp3','Edward Sharpe & The Magnetic Zeros', 'images/homeArt.jpeg');
var song2 = new Song('Hopeless Wanderer', 'audio_files/Hopeless_Wanderer.mp3', 'Mumford and Sons','images/babel.jpeg');
var song3 = new Song('Lose Your Mind', 'audio_files/Lose_Your_Mind.mp3', 'Kodaline', 'images/loseArt.jpeg');
var song4 = new Song('New York', 'audio_files/NY.mp3', 'Boxer Rebellion', 'images/NyArt.jpeg');
var song5 = new Song('S.O.B.', 'audio_files/SOB.mp3', 'Nathaniel Rateliffe and the Night Sweats', 'images/SobArt.jpeg');
var song6 = new Song('The One', 'audio_files/The_One.mp3', 'Kodaline', 'images/theOneArt.jpeg')

var a = new Playlist()
a.addSongs(song1)
a.addSongs(song2)
a.addSongs(song3)
a.addSongs(song4)
a.addSongs(song5)
a.addSongs(song6)


// this.titleAppear =
