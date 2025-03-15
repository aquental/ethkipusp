require("@chainlink/env-enc").config();
import process from "node:process";

const URL = process.env.RPC;
const apiKEY = process.env.API_KEY;
const port = process.env.PORT;

console.log("URL: " + URL);
console.log("apiKEY: " + apiKEY);
console.log("port: " + port);
