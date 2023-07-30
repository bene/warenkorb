import * as fs from "node:fs";

let data;
let ai_path = "out/";
let sample_path = "data/";

const ai_file = 'combined.json';
const sample_file = 'clean_data.json';
const finalData = [];

const ai_jsonData = JSON.parse(fs.readFileSync(ai_path + ai_file, "utf-8"));
const sample_jsonData = JSON.parse(fs.readFileSync(sample_path + sample_file, "utf-8"));

sample_jsonData.forEach((item) => {

    let aiJsonObject = getObjectById(ai_jsonData, item.id);
    // console.log("sample entry:" + item.id + " ai entry:" + aiJsonObject?.id)
    item.category = aiJsonObject?.category||null;
    item.subcategories = aiJsonObject?.subcategories||[];
    finalData.push(item);
});

const outputFilePath = "data/final.json";
fs.writeFileSync(outputFilePath, JSON.stringify(finalData, null, 2));

function getObjectById(jsonData, idToFind) {
    return jsonData.find(item => item.id === idToFind);
}

//    combinedData.push(...jsonData);
  //  const outputFilePath = path+ outputFile;
    // fs.writeFileSync(outputFilePath, JSON.stringify(combinedData, null, 2));




