var play = document.getElementById('playButt');

var pause = document.getElementById('pauseButt');

var next = document.getElementById('nextButt');

var titleBox = document.getElementById('titleBox')

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
});
// var currentSong = new Audio('audio_files/The_One.mp3')

pause.addEventListener('click', function(){
  a.pauseAudio()
  titleBox.innerHTML ='SONG PAUSED'
});
next.addEventListener('click', function(){
  a.nextAudio()
  a.playAudio()
titleBox.innerHTML = a.playlist[a.songNum].title + ' - '+a.playlist[a.songNum].artist;});

titleBox.style.textAlign = 'center'

class Song{
  constructor(title, url, artist){
  this.title = title;
  this.url = url;
  this.artist = artist;
  this.myAudio = new Audio(this.url)
  }
}


class Playlist{
  constructor(){
    this.playlist = [];
    // this.myAudio = new Audio()
    this.songNum = 0
      }
    addSongs(song){
      this.playlist.push(song)
    }
    playAudio(){
      this.playlist[this.songNum].url
      this.playlist[this.songNum].myAudio.play()
    }
    pauseAudio(){
      // this.myAudio.pause()
      this.playlist[this.songNum].myAudio.pause()
    }
    nextAudio(){
      this.playlist[this.songNum].myAudio.pause()
      this.playlist[this.songNum++]
      this.playlist[this.songNum].myAudio.play()

    }

    }

var song1 = new Song('Home','audio_files/Home.mp3','Edward Sharpe & The Magnetic Zeros');
var song2 = new Song('Hopeless Wanderer', 'audio_files/Hopeless_Wanderer.mp3', 'Mumford and Sons');
var song3 = new Song('Lose Your Mind', 'audio_files/Lose_Your_Mind.mp3', 'Kodaline');
var song4 = new Song('New York', 'audio_files/NY.mp3', 'Boxer Rebellion');
var song5 = new Song('S.O.B.', 'audio_files/SOB.mp3', 'Nathaniel Rateliffe and the Night Sweats');
var song6 = new Song('The One', 'audio_files/The_One.mp3', 'Kodaline')

var a = new Playlist()
a.addSongs(song1)
a.addSongs(song2)
a.addSongs(song3)
a.addSongs(song4)
a.addSongs(song5)
a.addSongs(song6)


// this.titleAppear =
