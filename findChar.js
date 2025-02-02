import fs from "fs";

let usedcharTF = Array(1<<16).fill(0);

let usedchar = [];

let count = 0;

for (let i = 2; i < process.argv.length; i++) {
    const data =  fs.readFileSync(process.argv[i], 'utf8');
    for (let j = 0; j < data.length; ++j) {
        usedcharTF[data.codePointAt(j)] = 1;
    }
}

for(var i=0;i<0xFFFF;i++){
    if(usedcharTF[i]){
        usedchar.push(String.fromCodePoint(i));
        count++;
    }
}

console.log(count+" Charactors was found.");

const output = JSON.stringify(usedchar, null, ' ');
fs.writeFileSync('foundchar.json', output);