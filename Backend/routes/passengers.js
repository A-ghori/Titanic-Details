import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
//Load the JSON data from file
const passengers = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/titanic.json'), 'utf-8')
);
// //Sample dummy data for now 


// const passengers = [
//     {name: "Jack Dawson", age:19, pclass:3},
//     {name: "Rose DeWitt Bukater", age:17, pclass:1},
// ];

//Get all passengers via GET: /api/passengers/serach?name=jack
router.get('/search', (req,res) => {
    const name = req.query.name?.toLowerCase();
// if (result.length === 0){
//     return res.status(404).json({message: "No passengers found"});
// }
// res.json(result);
if(!name)return res.status(400).json({ error: "Missing name query parameter" });

const result = passengers.filter((p) =>
  p.name && typeof p.name === "string" && p.name.toLowerCase().includes(name.toLowerCase())
);
if(result.length === 0){
    return res.status(404).json({ message: "No passengers found "});
}
res.json(result);
});

export default router;