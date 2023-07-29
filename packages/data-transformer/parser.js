import * as fs from "node:fs";

const allowedStores = ["billa", "spar", "hofer", "lidl"];

let data = fs.readFileSync("data/latest-canonical.json", "utf-8");

data = JSON.parse(data);
data = data.map((v) => ({ ...v, category: Number.parseInt(v.category, 16) }));
data = data.sort((a, b) => a.category - b.category);
data = data.map((v) => ({
  store: v.store,
  id: v.id,
  name: v.name,
  category: v.category,
  bio: v.bio,
  price: v.price,
  unit: v.unit,
  quantity: v.quantity,
}));
data = data.filter((v) => allowedStores.includes(v.store));

fs.writeFileSync("data/clean_data.json", JSON.stringify(data));
