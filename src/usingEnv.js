require("@chainlink/env-enc").config();

const URL = process.env.RPC;
const apiKEY = process.env.API_KEY;
const port = process.env.PORT;

console.log(URL, apiKEY, port);
