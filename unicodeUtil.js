import fs from "fs";
import {styleText} from 'node:util';

function toHex(v) {
    return (('0000' + v.toString(16).toUpperCase()).slice(-4));
}

let data;

if(process.argv[2]!="init"){
    data = JSON.parse(fs.readFileSync('./codeTable.json', 'utf8'));
}

const functions = {
    init(){
        let data = [];
        for(var i=0;i<65536;i++){
            data[i] = String.fromCodePoint(i);
        }
        const output = JSON.stringify(data, null, ' ');
        fs.writeFileSync('codeTable.json', output);
    },
    show(){
        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 16; j++) {
                let order = (i*16+j)*256;
                if(data[order]){
                    process.stdout.write(toHex(order)+" "+data[order]+", ");
                }else{
                    process.stdout.write(toHex(order)+styleText('black', " Ud")+", ");
                }
            }
            process.stdout.write("\n");
        }
    },
    showt(place){
        place = parseInt(place, 16);
        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 16; j++) {
                let order = place*256+i*16+j;
                if(data[order]!= undefined){
                    process.stdout.write(toHex(order)+" "+data[order]+", ");
                }else{
                    process.stdout.write(toHex(order)+styleText('black', " Ud")+", ");
                }
            }
            process.stdout.write("\n");
        }
    },
    showc(place){
        place = parseInt(place, 16);
        if(data[place]){
            console.log(data[place]);
        }else{
            console.log("Data was not found.");
        }
    },
    delt(place){
        place = parseInt(place, 16);
        data.splice(place*256, 256);
    
        const output = JSON.stringify(data, null, ' ');
        fs.writeFileSync('codeTable.json', output);
    },
    delmt(place1, place2){
        place1 = parseInt(place1, 16);
        place2 = parseInt(place2, 16);
    
        data.splice(place1*256, (place2-place1+1)*256);
    
        const output = JSON.stringify(data, null, ' ');
        fs.writeFileSync('codeTable.json', output);
    },
    addj(place, addJson){
        place = parseInt(place, 16);
        let addData = JSON.parse(fs.readFileSync(addJson, 'utf8'));

        Array.prototype.splice.apply(data,[place,0].concat(addData));

        const output = JSON.stringify(data, null, ' ');
        fs.writeFileSync('codeTable.json', output);
    }
}

functions[process.argv.splice(0,3)[2]](...process.argv);//splice()は配列の削除した要素を返す。