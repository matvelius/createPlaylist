var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var lineIndex = 0
var playlistLength = 0 

var russianSongs = []
var foreignSongs = []
var finalPlaylist = []

rl.on('line', function(line){
	if (lineIndex == 0) {
    	playlistLength = line
    } else if (lineIndex == 1) {
    	russianSongs = line.split(' ')
    } else if (lineIndex == 2) {
    	foreignSongs = line.split(' ')
        
        for (let i = 0; i < playlistLength; i++) {
        	finalPlaylist.push(russianSongs[i])
            finalPlaylist.push(foreignSongs[i])
        }
        
        console.log(finalPlaylist.join(' '))
        return
    }
    lineIndex += 1
})