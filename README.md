# Abelton Link and Rekordbox Bridge for Qlc+

## How to ?
- Install [node js](https://nodejs.org/en)
- On mac : open Audio Midi Setup.app Go on Window --> Midi studio --> double clik on IAC Driver --> check device is online
- Open qlc + and add the midi input into a new universe (On mac : IAC driver)
- Set chanels input and output to 1 
- Open the Abelton Link Software (for example Rekordbox) and enable link
- Clone the rep on a directory
- Open the terminal and run `npm i` and `node index.js`
- Go on qlc+ add a clock on the virtual console, on input set the Tap button to chanel 1 and the universe to midi
- Start the show and you will see the tap button pressed and a few seconde later the time will be set
- You'll have few ms delay, but don't worry you won't see anythink
