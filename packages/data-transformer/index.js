import * as fs from "node:fs";
import { Configuration, OpenAIApi } from "openai";

const allowedStores = ["billa", "spar", "hofer", "lidl"];

let data = fs.readFileSync("data/clean_data.json", "utf-8");
data = JSON.parse(data);
data = data.map((v) => ({ store: v.store, id: v.id, name: v.name }));

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const splitData = splitArrayEveryNth(data, 100);
console.log(splitData.length, splitData[0].length);

const failedRequests = [];

for (let i of [51, 114, 257, 262, 307, 326, 350]) {
  console.log("Started", i);
  openai
    .createChatCompletion({
      model: "gpt-3.5-turbo-16k",
      messages: [
        {
          role: "user",
          content:
            "The following JSON list will describe grocery products in austrian supermarktes in a JSON format. " +
            "Use the name field to generate a category and subcategories." +
            "Add a field to each product which describes the category for the specific product in one word." +
            "Also add a list of subcategories that breaks down the category for each individual product." +
            "These can be synonyms to the category or search terms that are not in the name to find the product. " +
            "The categories should be reused for similar products. The category should be in german." +
            "List: \n" +
            JSON.stringify(splitData[i]),
        },
      ],
    })
    .then((r) => {
      const result = r.data.choices[0].message.content;
      fs.writeFileSync("out/raw_" + i + ".json", result);
      console.log("Wrote", i);
    })
    .catch(() => {
      failedRequests.push(i);
      console.log(failedRequests);
      fs.writeFileSync(
        "out/failed_" + i + ".json",
        JSON.stringify(failedRequests),
      );
    });
  await new Promise((r) => setTimeout(r, 4000));
}

function splitArrayEveryNth(arr, n) {
  const result = [];
  for (let i = 0; i < arr.length; i += n) {
    const chunk = arr.slice(i, i + n);
    result.push(chunk);
  }
  return result;
}
