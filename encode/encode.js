import fs from "fs";

const data = fs.readFileSync(process.argv[2], 'utf8');
const table = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));

let encodedData = [];
for(let i=0;i<data.length;i++){
    let code = table.findIndex((element) => element == data.charAt(i));
    if(code==-1){
        encodedData.push(0x20);
    }else if(code<128){
        encodedData.push(code);
    }else{
        encodedData.push(0b10000000|code&(0b1111111));
        encodedData.push(0b00000000|code>>7);
    }
}
const output = Buffer.from(encodedData);

fs.writeFileSync('encoded.txt', output);