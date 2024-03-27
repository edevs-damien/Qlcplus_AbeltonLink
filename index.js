const midi = require('midi');
const express = require('express');
const app = express();
const port = 3000;
const abletonlink = require('abletonlink');
const link = new abletonlink();




console.log('Qlc Link is starting ...');
let ref_phase = "1";

link.startUpdate(10, (beat, phase, bpm) => {
    let new_phase = phase.toFixed(0)

    if (ref_phase === new_phase) {
        tap()
        if (new_phase === "4") { ref_phase = "1" } else {
            ref_phase = (phase + 1).toFixed(0)
        }


    }
});

let i = 0;

const tap = () => {

    console.clear()
    console.log("Qlc link is running")
    console.log(link.bpm.toFixed(2) + " bpm")
    console.log("tap")
    setTimeout(() => {
        console.clear();
        console.log("Qlc link is running")
        console.log(link.bpm.toFixed(2) + " bpm")
    }, 100)
    const output = new midi.Output();
    output.getPortCount();
    output.getPortName(0);
    output.openPort(0);
    output.sendMessage([176, 0, 1]);
    output.closePort();

    if (i === 0) {
        output.getPortCount();
        output.getPortName(0);
        output.openPort(0);
        output.sendMessage([176, 1, 1]);
        output.closePort();
        i = 1;
    } else i = 0;
}




