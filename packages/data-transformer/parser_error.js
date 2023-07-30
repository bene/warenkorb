import * as fs from "node:fs";

let data;

let path = "out/"

for (let i = 0; i <= 387 ; i++) {
    let file = "raw_" + i + ".json"
    console.log(path + file)
    if (i == 36 || i == 56 || i == 64 || i == 123|| i == 127 || i == 156 || i == 174 || i == 206 || i == 221|| i == 223 || i == 231 || i == 233 || i == 256 || i == 259 || i == 274 || i == 302 || i == 330|| i == 341 || i == 365 || i == 368 || i == 370)
        continue;
   data = JSON.parse(fs.readFileSync(path + file, "utf-8"));

}


