import fs from "fs";

const data = fs.readFileSync(process.argv[4]);
const table = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));

let decodedData = "";
for(let i=0;i<data.length;i++){
    if((data[i]&0b10000000)>>7){
        //console.log((data[i]&0b01111111)<<7|data[i+1]&0b01111111);
        decodedData+=table[(data[i]&0b01111111)|(data[i+1]&0b01111111)<<7];
        i++;
    }else{
        decodedData+=table[data[i]];
    }
}

fs.writeFileSync('decoded.txt', decodedData);